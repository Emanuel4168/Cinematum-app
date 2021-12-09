/****** Object:  Table [dbo].[Genre]    Script Date: 08/12/2021 05:58:31 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Genre](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](40) NOT NULL,
 CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Type]    Script Date: 08/12/2021 05:59:13 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Type](
	[ID] [int] NOT NULL,
	[Type] [varchar](20) NOT NULL,
 CONSTRAINT [PK_Type] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Film]    Script Date: 08/12/2021 05:59:45 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Film](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](80) NOT NULL,
	[Director] [varchar](60) NOT NULL,
	[IdGenre] [int] NOT NULL,
	[Description] [varchar](200) NULL,
	[Type] [varchar](20) NOT NULL,
	[Year] [varchar](4) NOT NULL,
	[Review] [varchar](max) NULL,
	[Score] [varchar](20) NULL,
 CONSTRAINT [PK_Film] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Film]  WITH CHECK ADD FOREIGN KEY([IdGenre])
REFERENCES [dbo].[Genre] ([ID])
ON DELETE CASCADE
GO


/****** Object:  Table [dbo].[Favorites]    Script Date: 08/12/2021 06:00:20 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Favorites](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IdField] [int] NOT NULL,
 CONSTRAINT [PK_Favorites] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD FOREIGN KEY([IdField])
REFERENCES [dbo].[Film] ([ID])
ON DELETE CASCADE
GO


ALTER TABLE [dbo].[Film]
ADD FOREIGN KEY (IdGenre) REFERENCES Genre(ID)
ON DELETE CASCADE

ALTER TABLE [dbo].[Favorites]
ADD FOREIGN KEY (IdField) REFERENCES Film(ID)
ON DELETE CASCADE


/****** Object:  StoredProcedure [dbo].[USP_GetFavorites]    Script Date: 08/12/2021 06:01:25 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[USP_GetFavorites]
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    select 
	f.ID,
	f.[Name],
	Director,
	t.[type],
	[year],
	g.[Name] as GenreName,
	v.ID as FavoriteID
	from film f
	inner join
	Genre g
	on f.idgenre = g.id
	inner join [type] t
	on f.[type] = t.ID
	inner join Favorites v
	on v.idField = f.id

END
GO

/****** Object:  StoredProcedure [dbo].[USP_GetMovies]    Script Date: 08/12/2021 06:01:53 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[USP_GetMovies]
(
    -- Add the parameters for the stored procedure here
    @MovieId INT
)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    select 
	f.ID,
	f.[Name],
	Director,
	t.[type],
	[year],
	g.[Name] as GenreName,
	Case when v.id is not null then 'Si' else 'No' end as Favorite,
	f.Score,
	f.Review
	from film f
	inner join
	Genre g
	on f.idgenre = g.id
	inner join [type] t
	on f.[type] = t.ID
	Left join Favorites v
	on v.idField = f.id
	Where @MovieId = -1 or @MovieId = f.ID
END
GO


/****** Object:  StoredProcedure [dbo].[USP_GetRandomMovie]    Script Date: 08/12/2021 06:02:15 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[USP_GetRandomMovie]
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    select 
	top 1
	f.ID,
	f.[Name],
	Director,
	t.[type],
	[year],
	g.[Name] as GenreName,
	Case when v.id is not null then 'Si' else 'No' end as Favorite,
	f.Score,
	f.Review
	from film f
	inner join
	Genre g
	on f.idgenre = g.id
	inner join [type] t
	on f.[type] = t.ID
	Left join Favorites v
	on v.idField = f.id
	ORDER BY NEWID()
END
GO


