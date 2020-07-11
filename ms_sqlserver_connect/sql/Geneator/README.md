# SQL Generator #

So you don't have to sit and write all of the stored procedures for a database, I have included a simple code generator. The tool was created by BinaryIntellect and will generate T-SQL scripts along with C# code for INSERT, UPDATE, DELETE, SELECT ALL BY PK, SELECT BY FK and DELETE BY FK operations. When using this with a node application, simply toss the C# code which is generated and keep the stored procedures.  

## Usage ##

**Step one:** 

Specify the database connection string. Here is where you will select a SQL server, select SQL Server Authentication, enter the username and password for the SQL server user. Select the database you would like to use, and click next. 

**Step Two:**

Select the tables which you would like to work with. You should see a listing of all tables in the database that you selected in step one. After selection, click next.

**Step Three:**

At this time you can now name your SQL procedures anything you wish, typically just keep the default names. Once you are done, click next. 

**Step Four:**

This step is for the generation of the C# code which supports the SQL. If you are not using the C# code, you can just click next. 

**Step Five**:

Select the folder and file names for the generated code. Once done, click next. 

At this time you are ready to run the generator, click finish and the code will be written to the folder and files which  you named in step five. 


## Notes ##

You should see both a C# code file and a SQL file along with a SQL Helper file. If you are using this in a node application, the only file which you need is the SQL file, the other two files are for C# development and can safely be ignored. 

Inside the SQL file you should find five stored procedures. You can either use these as is, or you can take the code and remove the stored procedure wrappers and make these into non-stored procedure SQL scripts. 
