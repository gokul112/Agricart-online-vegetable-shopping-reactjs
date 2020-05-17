import {useState,useEffect} from 'react';
import fire from '../config/fire';
import * as Firebase from 'firebase/app';
import History from './History';



export default () => {

  const [products,setProducts] = useState([])
  const [filteredProducts,setfilteredProducts] = useState([])
  const [cartItems,setCartItems] = useState([])
  const [search, setSearch] = useState("");
  const [usrLogin,setUsr_Login] = useState("");
  const [pwdLogin,setPwd_Login] = useState("");
  const [cnfPwdLogin,setCnfPwd_Login] = useState("");
  const [guestCart,setGuestCart] = useState([]);
  const [user,setUser] = useState({});
  const [orders,setOrders] = useState([]);
  const [env] = useState('sandbox');
  const [currency] = useState('USD');
  const [client] = useState({
        sandbox:    'ATKphVPUKrAFnWXr042hYQsynmg9U_UUeudlf1RjYkyKf3rsf5s3IE-H1QZWn8ziKEZzq5WH4TRalZR_',
        production: 'YOUR-PRODUCTION-APP-ID',
    })
    


  const db = fire.firestore();


    //Products
    useEffect(() => {
        db.collection('products')
        .get()
        .then(response => {
            const data = response.docs.map(doc => {
                const productData = doc.data();
                productData.id=doc.id;
                return productData
            });
                setProducts(data)
                setfilteredProducts(data)
            })
         return () => {
    
        }
    }, [db]);


    useEffect(() => {

       const unsubscribe = fire.auth().onAuthStateChanged((user)=>{
         if(user)
            {
            setUser({userId:user.uid,email:user.email})

            let userCartItem = db.collection("User").doc(user.uid);
            let orders = db.collection('Orders/').doc(user.uid);

            userCartItem.get().then(function(doc) {
                if (doc.exists) {
                        setCartItems(doc.data().cartItems);
                } 
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            orders.get().then(function(doc) {
                if (doc.exists) {
                        setOrders(doc.data().cartItems);
                } 
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            }
            else{
             fire.auth().signInAnonymously()
                 
            }
       
          })
          return () => { 
              unsubscribe();
          }
      }, [db])


        //Search 
        useEffect(() => {
            setfilteredProducts(
                    [...products].filter(product => {
                        return product.title.toLowerCase().includes(search.toLowerCase());
                    })
            )
            return () => {

            };
        }, [search,products])

  
     useEffect(() => {
        
         if(user.email===null)
            setGuestCart(cartItems)
         return () => {
       
         }
     }, [cartItems,user.email])


     let resultFilter = (temp1, temp2) => {
        return temp1.filter(temp1 =>
          !temp2.some(
            temp2 => temp1.id === temp2.id
          )
        );
      };

      
return{
    filteredProducts:filteredProducts,
    cartItems:cartItems,
    search:search,
    orders:orders,
    env:env,
    currency:currency,
    client:client,

    onAddCart : async(product) => {
            const cartItem = cartItems;
            let productAlreadyInCart = false;
            cartItem.forEach(item => {
                if(item.id===product.id){
                    productAlreadyInCart  = true;
                    item.count++;
                }
            })
            if(!productAlreadyInCart){
                cartItem.push({...product,count:1})
            }
            setCartItems([...cartItem])
            if(user.userId!==null)
                await db.collection('User/').doc(user.userId).set({cartItems:cartItem});
    },
      handleSearch : (value) => {
        setSearch(value);
      },

      handleChangeSort : (sort) => {
        if(sort!==''){
            const updated =  [...products].sort((a,b) => {
              return (sort==="lowest")?(a.price > b.price?1:-1):(a.price < b.price?1:-1);
            });
            setfilteredProducts(updated);
        }
        else{
          const updated = [...products].sort((a,b)=> { return (a.id < b.id ?1:-1)});
          setfilteredProducts(updated);
        }
      },

      onRemoveCart : async (removeItem) => {
            const update =  [...cartItems].filter(item => {
                    if(item.id===removeItem.id && removeItem.count<=1)
                    return false;
                    else{
                    if(item.id===removeItem.id && removeItem.count>1)
                        item.count--;
                    return true;
                    }
                });
                setCartItems(update);
                if(user.userId!==null)
                    await db.collection('User/').doc(user.userId).update({cartItems:update});
      },

      userLoginChange:(value) => {
          setUsr_Login(value);
      },

      pwdLoginChange:(value) =>{
          setPwd_Login(value)
      },

      cnfPwdLoginChange:(value) => {
          setCnfPwd_Login(value)
      },
      buy:(value) => {
          History.push('/Agricart-online-vegetable-shopping-reactjs/'+value);
      },

      login: (e)=>{
          e.preventDefault();
            fire.auth().signInWithEmailAndPassword(usrLogin,pwdLogin).then((res)=>{
                if(res){
                    let userCartItem = db.collection("User").doc(res.user.uid);
                    userCartItem.get().then(function(doc) {
                        if (doc.exists) {
                            
                            let upc = doc.data().cartItems;
                            
                        if(user.email===null){
                            let update = []
                            upc.forEach(function(cartItem){
                                guestCart.forEach(function(guestCar){
                                    if(cartItem.title===guestCar.title){
                                                 guestCar.count = cartItem.count + guestCar.count;
                                                 update.push(guestCar);
                                         }
                                            })
                                        })
                                        resultFilter(upc,guestCart).forEach(function(val){
                                            update.push(val)
                                        })
                                        resultFilter(guestCart,upc).forEach(function(val){
                                            update.push(val)
                                        })
                            db.collection('User/').doc(res.user.uid).set({cartItems:update});
                            History.push('/Agricart-online-vegetable-shopping-reactjs');
                                }
                            } 
                        
                    })
                    .catch(function(error) {
                        console.log("Error getting document:", error);
                    });
                   
                }
            })
            .catch((err)=>{
                console.log(err)
            })
                

      },

      signUp:(e)=>{
            e.preventDefault();
            if(pwdLogin === cnfPwdLogin){
                if(user.email!==null){
                    fire.auth().createUserWithEmailAndPassword(usrLogin,pwdLogin).then((res)=>{
                    if(res){
                        History.push('/Agricart-online-vegetable-shopping-reactjs/products')
                    }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
                else
                {
                const cred = Firebase.auth.EmailAuthProvider.credential(usrLogin,pwdLogin)
                Firebase.auth().currentUser.linkWithCredential(cred);
                History.push('/Agricart-online-vegetable-shopping-reactjs/products')
                setUser({...user,email:usrLogin})
                }
            }
            else{
                alert("pwd not match");
            }
        },

        logout:() => {
            fire.auth().signOut();
            setCartItems([])
        },
        user:user,
        transcationSuccess:(data,cartItem) => {
             db.collection('Orders/').doc(user.userId).set({cartItems:cartItem,paymentDetails:data})
             .then(function() {
                 db.collection('User/').doc(user.userId).set({cartItems:[]})
                 setCartItems([]);
                History.push("/Agricart-online-vegetable-shopping-reactjs/orderConfirmation");
            }).catch(function(error) {
                console.log("Error writing document: ", error);
            })
        },
        transcationError:() => {
            console.log("transaction failed");
        },
        transcationCancelled:() => {
            console.log("transaction cancelled")
        },
        onCheckout:(e) => {
            History.push("/Agricart-online-vegetable-shopping-reactjs/checkout");
        }


  
}

}