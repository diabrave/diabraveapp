import chalk from "chalk";
import { supabase } from "../../src/lib/supabase";

describe("Connection Status Database Integration", () => {
  // Increase timeout for database operations
  jest.setTimeout(10000);

  afterAll(() => {
    const dbUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
    console.log(chalk.green(`Successfully tested the database connection against: ${dbUrl}`));
  });

  it("should insert, fetch, and delete a test connection status", async () => {
    const testStatus = {
      status: 1,
    };

    // 1. Insert
    const { data: insertData, error: insertError } = await supabase
      .from("connection_status")
      .insert([testStatus])
      .select()
      .single();

    if (insertError) {
      console.error("Supabase Error (Insert):", insertError.message);
    }

    expect(insertError).toBeNull();
    expect(insertData).toMatchObject(testStatus);
    expect(insertData.id).toBeDefined();

    const recordId = insertData.id;

    // 2. Fetch
    const { data: fetchData, error: fetchError } = await supabase
      .from("connection_status")
      .select("*")
      .eq("id", recordId)
      .single();

    expect(fetchError).toBeNull();
    expect(fetchData).toMatchObject(testStatus);

    // 3. Delete
    const { error: deleteError } = await supabase
      .from("connection_status")
      .delete()
      .eq("id", recordId);

    expect(deleteError).toBeNull();

    // 4. Verify deletion
    const { data: verifyData } = await supabase
      .from("connection_status")
      .select("*")
      .eq("id", recordId)
      .single();

    expect(verifyData).toBeNull();
  });
});
