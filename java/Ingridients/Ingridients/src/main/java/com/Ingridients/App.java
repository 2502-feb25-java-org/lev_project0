package com.Ingridients;

import java.io.FileInputStream;
import java.util.ArrayList;

//Hello. I am typing here. And here. Still typing. 
//New line now. No actual code. Just random nonsense
//new line
// here I am

public class App {
    public static void main(String[] args) {
        try {
            FileInputStream in = new FileInputStream("ingridients.txt");
            ArrayList<String> ingridients = readIngridients(in);
            for (String item : ingridients) {
                System.out.println(item);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public static ArrayList<String> readIngridients(FileInputStream in) throws Exception {
        ArrayList<String> ingridents = new ArrayList<>();
        int content;
        String item = "";
        while ((content = in.read()) != -1) {
            item += (char) content;
            if (content == (int) '\r') {
                ingridents.add(item.trim());
                item = "";
            }
        }
        ingridents.add(item.trim());
        return ingridents;
    }
}
