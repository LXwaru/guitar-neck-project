steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE triad (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(15) NOT NULL,
            root VARCHAR(15) NOT NULL,
            third VARCHAR(15) NOT NULL,
            fifth VARCHAR(15) NOT NULL,
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE exercise;
        """,
    ],
]