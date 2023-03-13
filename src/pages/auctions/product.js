import img1 from '../../assets/auctions/img1.svg'
import img2 from '../../assets/auctions/img2.svg'
import img3 from '../../assets/auctions/img3.svg'
import img4 from '../../assets/auctions/img4.svg'
import img5 from '../../assets/auctions/img5.svg'

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