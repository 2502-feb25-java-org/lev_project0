package com.revature.JDBCDemo;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.DriverManager;

public class App {

    public static void main(String[] args) {

        // Connect to database
        String hostName = "levit-dbserver.database.windows.net"; // update me
        String dbName = "advworksdb"; // update me
        String user = "lev"; // update me
        String password = "pass123!"; // update me
        String url = String.format("jdbc:sqlserver://%s:1433;database=%s;user=%s;password=%s;encrypt=true;"
            + "hostNameInCertificate=*.database.windows.net;loginTimeout=30;", hostName, dbName, user, password);
        Connection connection = null;

        try {
            connection = DriverManager.getConnection(url);


            // Create and execute a SELECT SQL statement.
            String selectSql = "SELECT FirstName, LastName FROM [Person].[Person] "
            		+"WHERE PersonType = 'EM'";

            try (Statement statement = connection.createStatement()){
            ResultSet resultSet = statement.executeQuery(selectSql);

                // Print results from select statement
                while (resultSet.next())
                {
                    System.out.println(resultSet.getString(1) + " "
                        + resultSet.getString(2));
                }
                resultSet.close();
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}