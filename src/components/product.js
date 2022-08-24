import './product.css';
import dosa from './images/dosa.jpg';
import coffee from './images/coffee.jpg';
import ice from './images/ice cream.jpg';
import idly from './images/idly.jpg';
function Collections() {
    const order = [
        {
            item: "Dosa",
            offer: "10% Offer",
            restaurant: "Shakthi hotel",
            price: "Rs.210 "
        },
        {
            item: "Coffee",
            offer: "7% Offer",
            restaurant: "Cafe Bar",
            price: "Rs.30"
        },
        {
            item: "Ice-Cream",
            offer: "10% Offer",
            restaurant: "Arun Ice-Creams",
            price: "Rs.150"
        },
        {
            item: "Idly",
            offer: "5% Offer",
            restaurant: "Mad Hotel",
            price: "Rs.70"
        }
    ]
    return (
        <div>
            <div className="collection-container">
                <div className="collections">
                    <h1>Collections</h1>
                    <p>Explore curated lists of top restaurants, cafes, and ice creams are available in Chennai, based on trends</p>
                </div>
                <div className='order'>
                        <div className='item1'>
                            <div className='img'>
                                <img src={dosa} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{order[0].item}</p>
                                <p>{order[0].offer}</p>
                                <p>{order[0].price}</p>
                                <p>{order[0].restaurant}</p>
                            </div>
                        </div>
                        <div className='item2'>
                            <div className='img'>
                                <img src={coffee} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{order[1].item}</p>
                                <p>{order[1].offer}</p>
                                <p>{order[1].price}</p>
                                <p>{order[1].restaurant}</p>
                            </div>
                        </div>
                        <div className='item3'>
                            <div className='img'>
                                <img src={ice} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{order[2].item}</p>
                                <p>{order[2].offer}</p>
                                <p>{order[2].price}</p>
                                <p>{order[2].restaurant}</p>
                            </div>
                        </div>
                        <div className='item4'>
                            <div className='img'>
                                <img src={idly} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{order[3].item}</p>
                                <p>{order[3].offer}</p>
                                <p>{order[3].price}</p>
                                <p>{order[3].restaurant}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div >
    );
}

export default Collections;