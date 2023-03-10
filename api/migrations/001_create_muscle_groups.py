steps = [
    # [
    #     """
    #     CREATE TABLE accounts (
    #         id SERIAL PRIMARY KEY NOT NULL,
    #         email VARCHAR(200) NOT NULL,
    #         hashed_password VARCHAR(200) NOT NULL,
    #         username VARCHAR(250) NOT NULL,
    #         first_name VARCHAR(250) NOT NULL,
    #         last_name VARCHAR(250),
    #         height VARCHAR(50),
    #         weight VARCHAR(50),
    #         age VARCHAR(50)
    #     );
    #     """,

    #     """
    #     DROP TABLE accounts;
    #     """,
    # ],
    [
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(200) NOT NULL UNIQUE,
            hashed_password VARCHAR(200) NOT NULL UNIQUE,
            username VARCHAR(250) NOT NULL UNIQUE
        );
        """,
        """
        DROP TABLE accounts;
        """,
    ],
    [
        ##Create the table
        """
        CREATE TABLE muscle_groups (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL UNIQUE
        );
        """,
        ##Drop the table
        """
        DROP TABLE muscle_groups
        """
    ],
    [
        """
        CREATE TABLE exercises (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE,
            name VARCHAR(1000) NOT NULL,
            muscle_group_id INTEGER REFERENCES muscle_groups("id") ON DELETE CASCADE NOT NULL,
            reps VARCHAR(100),
            sets VARCHAR(100),
            duration VARCHAR(100)
        );
        """,
        ##Drop the table
        """
        DROP TABLE exercises
        """
    ],
    [
        """
        CREATE TABLE workouts (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE,
            name VARCHAR(1000) NOT NULL
        );
        """,
        ##Drop the table
        """
        DROP TABLE workouts
        """
    ],
    [
        """
        CREATE TABLE workouts_exercises (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE,
            workout_id INTEGER REFERENCES workouts("id") ON DELETE CASCADE NOT NULL,
            exercise_id INTEGER REFERENCES exercises("id") ON DELETE CASCADE NOT NULL
        );
        """,

        """
        DROP TABLE workouts_exercises
        """
    ],
    [
        """
        CREATE TABLE workouts_date (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE,
            workout_id INTEGER REFERENCES workouts("id") ON DELETE CASCADE NOT NULL,
            wo_date DATE NOT NULL
        );
        """,

        """
        DROP TABLE workouts_date
        """
    ],
    [
        """
        CREATE TABLE ex_wo_dates (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE,
            workout_id INTEGER REFERENCES workouts("id") ON DELETE CASCADE,
            wo_date DATE NOT NULL,
            exercise_id INTEGER REFERENCES exercises("id") ON DELETE CASCADE,
            status VARCHAR(5),
            weight_done VARCHAR(100),
            duration_done VARCHAR(100)
        );
        """,

        """
        DROP TABLE workouts_date
        """
    ],

]
