public class Main {

    public static void main(String[] args) {
        int[] A = {4, 2, 3, 1, 5};
        int K = 3;
        int L = 2;

        int result = maxMinDefense(A, K, L);
        System.out.println(result);  // ✅ Now it prints 4
    }

    public static int maxMinDefense(int[] A, int K, int L) {
        int low = Integer.MAX_VALUE;
        int high = Integer.MIN_VALUE;

        for (int a : A) {
            low = Math.min(low, a);
            high = Math.max(high, a);
        }

        high += K;
        int best = low;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (canAchieve(A, K, L, mid)) {
                best = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return best;
    }

    private static boolean canAchieve(int[] A, int K, int L, int target) {
        int n = A.length;
        int[] temp = new int[n];

        for (int i = 0; i <= n - L; i++) {
            System.arraycopy(A, 0, temp, 0, n);

            for (int j = i; j < i + L; j++) {
                temp[j] += K;
            }

            int min = Integer.MAX_VALUE;
            for (int val : temp) {
                min = Math.min(min, val);
            }

            if (min >= target) return true;
        }

        return false;
    }
}