import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state:{

    mobile:[
        {
            "id": 1,
            "model": "Google Pixel 3",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_1-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=356b8a4214b4bdda2912fb19c7b19a1ccd5d59031a77dddc6b7b3957523ce719",
            "price": 799
        },
        {
            "id": 2,
            "model": "Samsung Note 9",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_2-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0876b7016d260ec2f2b461635dd7338bbdf1c37b4f99d3ec90248d608e04e0f5",
            "price": 999
        },
        {
            "id": 3,
            "model": "Apple iPhone XS",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_3-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f5d0ec59751c12f4ec00d98af2bb72f9d4235e8d472656fe940f696edd4fc6a4",
            "price": 999
        },
        {
            "id": 4,
            "model": "Samsung Galaxy S9+",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_4-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=466726a97c8887d6d61c1aa14679e0e4c01d9dd71ecf38a53b047cd2c826bd33",
            "price": 840
        },
        {
            "id": 5,
            "model": "Xiaomi Pocophone F1",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_5-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4d111fbca08e7f22a30201f1d5335ba14d6354498bf8c2e633e5b81ebf3a0996",
            "price": 300
        },
        {
            "id": 6,
            "model": "Xiaomi Mi 8",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_6-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=43b262c0b6a7903b15180e122252086f573d7402fb949151bf966e53bef56bb6",
            "price": 400
        },
        {
            "id": 7,
            "model": "Huawei Mate 10 Pro",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/phone_7-min.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=858a82782d5404c57ab54dc34fe689794aea3b2ac25c8bb3495115fc9a48be7b",
            "price": 800
        },
        {
            "id": 20,
            "model": "Samsung Galaxy A7 (2018)",
            "image": "https://the-mobile-store.s3.amazonaws.com/img/samsunggalaxya72018.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBQJFCTCQPALOLKQ%2F20220914%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220914T162254Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e67f6dc45090e0c05c967fde25e7ff8dcb9dbae1b4126e255dea19f733dc76f6",
            "price": 533
        }
    ]
    
  }
 
})



export default store;
