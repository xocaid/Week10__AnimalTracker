-- TERMINAL COMMAND: pg_dump -d nameOfDatabase;
-- Purpose: pg_dump creates a back-up of your database by extracting it(database) into a script file.
-- Create nameOfFile.sql file(in db folder) on server side, paste & save pg_dump script file, need to comment out info after "SET"
-- PostgreSQL database dump

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: individuals; Type: TABLE; Schema: public; Owner: tpl522_10
-- --

-- CREATE TABLE public.individuals (
--     id integer NOT NULL,
--     nick_name character varying(40),
--     seen_on date,
--     species_id integer
-- );


-- ALTER TABLE public.individuals OWNER TO tpl522_10;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

-- CREATE SEQUENCE public.individuals_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.individuals_id_seq OWNER TO tpl522_10;

-- --
-- -- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
-- --

-- ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


-- --
-- -- Name: sightings; Type: TABLE; Schema: public; Owner: tpl522_10
-- --

-- CREATE TABLE public.sightings (
--     id integer NOT NULL,
--     date_time date,
--     location character varying(40),
--     healthy boolean,
--     individual_id integer,
--     created_on date,
--     email character varying(50)
-- );


-- ALTER TABLE public.sightings OWNER TO tpl522_10;

-- --
-- -- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
-- --

-- CREATE SEQUENCE public.sightings_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.sightings_id_seq OWNER TO tpl522_10;

-- --
-- -- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
-- --

-- ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


-- --
-- -- Name: species; Type: TABLE; Schema: public; Owner: tpl522_10
-- --

-- CREATE TABLE public.species (
--     id integer NOT NULL,
--     name character varying(40) NOT NULL,
--     type character varying(30),
--     population integer,
--     conservation_status character varying(5),
--     created_on timestamp without time zone NOT NULL
-- );


-- ALTER TABLE public.species OWNER TO tpl522_10;

-- --
-- -- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
-- --

-- CREATE SEQUENCE public.species_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.species_id_seq OWNER TO tpl522_10;

-- --
-- -- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
-- --

-- ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


-- --
-- -- Name: individuals id; Type: DEFAULT; Schema: public; Owner: tpl522_10
-- --

-- ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


-- --
-- -- Name: sightings id; Type: DEFAULT; Schema: public; Owner: tpl522_10
-- --

-- ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


-- --
-- -- Name: species id; Type: DEFAULT; Schema: public; Owner: tpl522_10
-- --

-- ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


-- --
-- -- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: tpl522_10
-- --

-- COPY public.individuals (id, nick_name, seen_on, species_id) FROM stdin;
-- 1	Ash	2002-05-03	5
-- 2	Misty	2008-11-25	10
-- 3	Brock	2003-03-05	10
-- 4	Tracey	2005-04-23	9
-- 6	Gary	2006-08-17	10
-- 10	Jess	2022-09-29	3
-- \.


-- --
-- -- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: tpl522_10
-- --

-- COPY public.sightings (id, date_time, location, healthy, individual_id, created_on, email) FROM stdin;
-- 2	2010-08-09	Kalos	t	4	2010-07-23	tracey@pokemon.com
-- 5	\N	Los Angeles	t	1	2022-09-29	jsmith@gmail.com
-- 6	\N	Denver	f	5	2022-09-29	jsmith@gmail.com
-- 7	\N	Denver	t	2	2022-09-29	jsmith@gmail.com
-- 8	\N	Los Angeles	f	5	2022-09-29	jsmith@gmail.com
-- 9	\N	Los Angeles	t	6	2022-09-29	jsmith@gmail.com
-- 11	\N	Denver	t	3	2022-09-21	jsmith@gmail.com
-- 12	\N	Denver	t	3	2022-09-29	jsmith@gmail.com
-- 13	\N	Los Angeles	f	5	2022-09-29	jsmith@gmail.com
-- 14	\N	Denver	f	6	2022-09-29	jsmith@gmail.com
-- \.


-- --
-- -- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: tpl522_10
-- --

-- COPY public.species (id, name, type, population, conservation_status, created_on) FROM stdin;
-- 1	Lapras	 Water	15	CE	1999-02-18 00:00:00
-- 2	Alakazam	Psychic	62	CE	2000-09-09 00:00:00
-- 3	Omnastar	Water	2	CE	2000-02-27 00:00:00
-- 4	Kabutops	Water	5	CE	1999-02-27 00:00:00
-- 5	Dragonite	Dragon	4	CE	2000-09-23 00:00:00
-- 6	Aerodactyl	Flying	14	CE	2021-03-02 00:00:00
-- 7	Kangaskhan	Normal	67	CE	1997-11-18 00:00:00
-- 8	Machamp	Fighting	58	CE	1999-09-25 00:00:00
-- 9	Polygon	Normal	1	CE	1997-12-16 00:00:00
-- 10	Togepi	Fairy	5	CE	1999-02-27 00:00:00
-- 11	Gengar	Ghost	121	CE	2020-02-02 00:00:00
-- 18	Pikachu	Electric	100234	\N	2021-11-02 00:00:00
-- 22	Caterpie	Bug	453456	\N	2021-11-02 00:00:00
-- \.


-- --
-- -- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
-- --

-- SELECT pg_catalog.setval('public.individuals_id_seq', 6, true);


-- --
-- -- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
-- --

-- SELECT pg_catalog.setval('public.sightings_id_seq', 3, true);


-- --
-- -- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
-- --

-- SELECT pg_catalog.setval('public.species_id_seq', 22, true);


-- --
-- -- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
-- --

-- ALTER TABLE ONLY public.individuals
--     ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


-- --
-- -- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
-- --

-- ALTER TABLE ONLY public.sightings
--     ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


-- --
-- -- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
-- --

-- ALTER TABLE ONLY public.species
--     ADD CONSTRAINT species_pkey PRIMARY KEY (id);


-- --
-- -- PostgreSQL database dump complete
-- --
