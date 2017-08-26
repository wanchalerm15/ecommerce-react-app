const productsState = {
   item1: [],
   item2: []
};

const productReducer = (state = productsState, action) => {
   switch (action.type) {
      case 'product1':
         const item1 = [
            {
               image: 'pc.jpg',
               category: 'Women',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc1.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc2.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc3.jpg',
               category: 'Women',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc4.jpg',
               category: 'Men',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc5.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc6.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc7.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            }
         ];
         state = {
            ...state,
            item1
         };
         break;
      case 'product2':
         const item2 = [
            {
               id: 1,
               image: 'pc.jpg',
               category: 'Women',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 2,
               image: 'pc1.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 3,
               image: 'pc2.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 4,
               image: 'pc3.jpg',
               category: 'Women',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 5,
               image: 'pc4.jpg',
               category: 'Men',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 6,
               image: 'pc5.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 7,
               image: 'pc6.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 8,
               image: 'pc7.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 9,
               image: 'pc.jpg',
               category: 'Women',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            }
         ];
         state = {
            ...state,
            item2
         };
         break;
      default:
   }
   return state;
};

export default productReducer;
