-- Insert data into course table
INSERT INTO public.course (course_name)
VALUES
('Introduction to Python'),
('Web Development Basics'),
('Database Management');

-- Insert data into level table
INSERT INTO public.level (level_number)
VALUES
(1),
(2),
(3);

-- Insert seed data for the content table
INSERT INTO public.content (content_title, content_lesson, course_id, level_id)
VALUES
    ('Getting Started', 'Learn how to install Python and set up your environment.', 1, 1),
    ('Variables and Data Types', 'Understand variables, data types, and basic operations in Python.', 1, 1),
    ('Control Flow', 'Master if-else statements and loops to control the flow of your program.', 1, 2),
    ('Functions', 'Learn how to write reusable blocks of code with functions in Python.', 1, 2),
    ('Introduction to Lists', 'Explore Python lists and how to work with collections of data.', 1, 2),
    ('Modules and Libraries', 'Understand how to use Python libraries and modules for extended functionality.', 1, 3),
    ('File Handling', 'Learn how to read from and write to files using Python.', 1, 3),
    ('Error Handling', 'Understand how to handle errors and exceptions gracefully in Python.', 1, 3);