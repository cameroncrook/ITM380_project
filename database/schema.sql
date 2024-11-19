CREATE TABLE IF NOT EXISTS public.account
(
    account_id SERIAL PRIMARY KEY,
    account_username varchar(25) UNIQUE NOT NULL,
    account_password varchar(25) NOT NULL,
    account_email varchar(25) NOT NULL
);