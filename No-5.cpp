#include <iostream>
using namespace std;

int main(){
    int x=30,y=5;
    do{
        y=y*2;
        x++;
        cout<<y<<" < "<<x<<" => x : "<<x<<" y : "<<y<<endl;
    }while( y< x);
}