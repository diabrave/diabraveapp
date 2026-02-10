-- Seed FAQs
INSERT INTO public.faqs (question, answer, category)
VALUES 
    ('Hvad er diaBrave?', 'diaBrave er en app designet til at hjælpe børn og forældre med at administrere Type 1 Diabetes på en sjov og overskuelig måde.', 'Generelt'),
    ('Hvordan synkroniserer jeg min data?', 'Du kan manuelt synkronisere din data ved at gå til indstillinger og trykke på "Backup til skyen".', 'Synkronisering'),
    ('Virker appen offline?', 'Ja, diaBrave er bygget som "Local-First", hvilket betyder at alt virker uden internet. Du behøver kun internet for at lave backup.', 'Teknisk');
