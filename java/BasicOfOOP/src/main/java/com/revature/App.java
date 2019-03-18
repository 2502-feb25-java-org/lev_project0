package com.revature; //User Defined Package

//import java.lang.*;

public class App {

    public static void main(String[] args) {

        // creating two matrices
        int a[][] = { { 1, 3, 4 }, { 3, 4, 5 } };
        int b[][] = { { 1, 3, 4 }, { 3, 4, 5 } };
        // Add 2 matrices above as a+b.

        int x[][] = { { 1, 1, 1 }, { 2, 2, 2 }, { 3, 3, 3 } };
        int y[][] = { { 1, 1, 1 }, { 2, 2, 2 }, { 3, 3, 3 } };
        // Multiply 2 matrices as x*y

        
        
        int[][] c = addMatrices(a, b);
        int[][] z = multiplyMatrices(x, y);

        printMatrix(c);
        System.out.println();
        printMatrix(z);
    }

    public static int[][] addMatrices(int[][] a, int[][] b) {
        int[][] c = new int[a.length][a[0].length];
        for (int i = 0; i < c.length; i++) {
            for (int j = 0; j < c[i].length; j++) {
                c[i][j] += a[i][j] * b[i][j];
            }
        }
        return c;
    }

    public static int[][] multiplyMatrices(int[][] a, int[][] b) {
        int[][] c = new int[a.length][b[0].length];
        for (int i = 0; i < c.length; i++) {
            for (int j = 0; j < c[i].length; j++) {
                for (int k = 0; k < b[0].length; k++) {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return c;
    }

    public static void printMatrix(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }
}
