package com.tz.studgame;

/**
 * Created by User on 10.05.2018.
 */
public class MainApp {
    public static void main(String[] args) {
        int[] hummocks = {0, 1, 3, 6, 10};
        passTheRoad(hummocks);
    }

    public static boolean passTheRoad(int[] hummocks) {
        boolean result = false;
        int k = 1;
        for (int i = 0; i < hummocks.length; i++) {
            if (hummocks.length < 2) {
                result = false;
            } else if (hummocks[0] != 0) {
                result = false;
            } else if (hummocks[1] != 1) {
                result = false;
            } else if (i == hummocks[i]
                    || i + k == hummocks[i]
                    || hummocks[i - 1] + (k + 1) == hummocks[i]
                    || hummocks[i - 1] + (k - 1) == hummocks[i]
                    ) {
                if (hummocks[i] != 0) {
                    k = hummocks[i] - hummocks[i - 1];
                    System.out.println(k);
                }
                result = true;
            } else {
                result = false;
            }
        }
        System.out.print(result);
        return result;
    }
}
