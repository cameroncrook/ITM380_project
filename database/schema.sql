CREATE TABLE IF NOT EXISTS public.account
(
    account_id SERIAL PRIMARY KEY,
    account_username varchar(25) UNIQUE NOT NULL,
    account_password varchar(25) NOT NULL,
    account_email varchar(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.course
(
    course_id SERIAL PRIMARY KEY,
    course_name varchar(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.level
(
    level_id SERIAL PRIMARY KEY,
    level_number INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS public.content
(
    content_id SERIAL PRIMARY KEY,
    content_title varchar(25),
    content_lesson TEXT NOT NULL,
    course_id INTEGER NOT NULL, -- Foreign key column
    level_id INTEGER NOT NULL, -- Foreign key column

    CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES public.course (course_id),
    CONSTRAINT fk_level FOREIGN KEY (level_id) REFERENCES public.level (level_id)
);