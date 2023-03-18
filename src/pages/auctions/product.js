import img1 from '../../assets/auctions/img1.webp'
import img2 from '../../assets/auctions/img2.webp'
import img3 from '../../assets/auctions/img3.webp'
import img4 from '../../assets/auctions/img4.webp'
import img5 from '../../assets/auctions/img5.webp'

export default {
   auction1: [
    {
        id: 1,
        img: img1
    },

    {
        id: 2,
        img: img2
    },

    {
        id: 3,
        img: img3
    }
    ],

   auction2: [
    {   id: 1,
        img: img4,
        name: 'Out of the box',
        creator: 'dan murray',
        date:'12/08/22',
        highestBid: '0.57 ETH',
        currentBid: '0.987ETH',
        isLiked: false,
    },
    {
        id: 2,
        img: img5,
        name: 'Falling apart',
        creator: 'jacob banks',
        date:'12/08/22',
        highestBid: '0.34 ETH',
        currentBid: '0.99ETH',
        isLiked: false,
    }

    ]
}