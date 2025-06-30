#include<iostream>

using namespace std;


bool isPalindromeBinary(int n)
{
    string binary = "";
    while (n > 0)
    {
        binary += (n % 2) + '0';
        n /= 2;
    }

    int left = 0, right = binary.size() -1;
    while (left < right)
    {
        if(binary[left] != binary[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}



bool iswonderful(int n)
{
    if (n % 2 == 1 && isPalindromeBinary(n)) {
        return true;
    } else {
        return false;
    }
}

int main()
{
    int n;
    cin >> n;
    
    if(iswonderful(n))
    {
        cout << "YES\n";
    } else {
        cout << "NO\n";
    }

    return 0;
}