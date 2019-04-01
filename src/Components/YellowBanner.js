import React, { Component } from 'react';


class YellowBanner extends Component {
    render() {
        return (
            <div className="yellow-boxes">
                <div className='yellow-box container'>
                    <h1>10</h1>
                    <h5>ODDANYCH WORKÓW</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum dicta dignissimos dolor dolores ducimus facilis illum minima molestias nam natus neque nulla provident quasi qui quis quod, voluptate voluptates.</p>
                </div>
                <div className='yellow-box container'>
                    <h1>5</h1>
                    <h5>WSPARTYCH ORGANIZACJI</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, doloribus ducimus earum exercitationem expedita fugit hic, laudantium magni mollitia natus necessitatibus nisi nostrum quae sapiente sed sint soluta, voluptate!</p>
                </div>
                <div className='yellow-box container'>
                    <h1>7</h1>
                    <h5>ZORGANIZOWANYCH ZBIÓREK</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, ad aliquam aut beatae consectetur consequatur corporis explicabo fugiat harum incidunt omnis perferendis possimus provident quidem quo reprehenderit, sunt voluptatum.</p>
                </div>
            </div>
        )
    }
}
export default YellowBanner;