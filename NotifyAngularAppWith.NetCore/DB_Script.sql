USE [Employee]
GO
/****** Object:  Table [dbo].[Emp]    Script Date: 2019-07-30 1:52:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Emp](
	[EmpID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Phone] [nvarchar](50) NULL,
	[Gender] [nvarchar](50) NULL,
	[Password] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Emp] PRIMARY KEY CLUSTERED 
(
	[EmpID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Emp] ON 

INSERT [dbo].[Emp] ([EmpID], [Name], [Email], [Phone], [Gender], [Password]) VALUES (1, N'nikunj', N'nikunj@gmail.com', N'9825891109', N'Male', N'viLrGeu3knw=')
INSERT [dbo].[Emp] ([EmpID], [Name], [Email], [Phone], [Gender], [Password]) VALUES (2, N'Bhavdip', N'bhavdip@gmail.com', N'9825891108', N'Male', N'r8ZXf54pHEE=')
INSERT [dbo].[Emp] ([EmpID], [Name], [Email], [Phone], [Gender], [Password]) VALUES (3, N'kaushik', N'kaushik@gmail.com', N'9825891107', N'Male', N'r8ZXf54pHEE=')
INSERT [dbo].[Emp] ([EmpID], [Name], [Email], [Phone], [Gender], [Password]) VALUES (7, N'sagar', N'sagar@gmail.com', N'9879898', N'Male', N'123')
SET IDENTITY_INSERT [dbo].[Emp] OFF
