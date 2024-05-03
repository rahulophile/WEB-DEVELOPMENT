#include<stdio.h>
#include<stdbool.h>
bool chek(int n){
        if(n==0){
            return true;
        }
        else{
            return false;
        }
    }
int main(){
    int x;
    printf("Enter a number : ");
    scanf("%d",&x);
    chek(x);
    return 0;
}