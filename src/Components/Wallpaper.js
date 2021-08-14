import React from 'react';
import '../Styles/home.css';

class Wallpaper extends React.Component {  
        handleChange = (event) => {
            const locationId = event.target.value;
            sessionStorage.setItem('locationId', locationId);
    }


    render() {
        const { locations } = this.props;
        return(
            <div>
            <img src="./Assets/homepage.png" width="100%" height="500" />
    <div>
        <div class="logo">
            <b>e!</b>
        </div>
        <div class="heading">
            Find the best restaurants, cafes and bars
        </div>
        <div class="locationSelector">
            <select class="locationDropdown" onChange={this.handleChange}>
                <option value="0">select</option>
                {
                    locations.map((item) => {
                        return <option value={item.location_id}>{item.name}</option>
                    })
                }
               
            </select>
            <input class="restaurantsinput" type="text" placeholder=" Search for restaurants" />
        </div>

    </div>
    </div>

          
        
        

        )
    }
}


export default Wallpaper;