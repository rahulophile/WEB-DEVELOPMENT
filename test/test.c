#include<stdio.h>
#include<math.h>
void printhelloworld(){
    printf("Hello World");
}
int* add(int* a, int* b){
    int c = (*a)+(*b);
    return &c;
}
int main(){
    int a=2 , b=4;
    int* ptr =add(&a, &b);
    printhelloworld();
    printf("successful", *ptr);
    return 0;
}