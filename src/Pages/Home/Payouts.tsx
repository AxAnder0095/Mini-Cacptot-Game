import './PayoutStyles.css'

function Payouts (){
    return (
        <div className='container  main-container'>
            <div className='payout-title'>Payout</div>
            <div className='h-100 mt-2'>
                <div className='sum'>
                    <h6 className='sum-title'>Sum</h6>
                    <span style={{color: '#edb705'}}>
                        6 <br/> 7 <br/> 8 <br/> 9 <br/> 10 <br/> 11 <br/> 12 <br/> 13 <br/> 14 <br/> 15
                    </span>
                </div>
                <div className='mgp'>
                    <h6 className='mgp-title'>MGP</h6>
                    <div>
                        10000 <br/> 36 <br/> 720 <br/> 360 <br/> 80 <br/> 252 <br/> 108 <br/> 72 <br/> 54 <br/> 180
                    </div>
                </div>
                <div className='sum'>
                    <h6 className='sum-title'>Sum</h6>
                    <span style={{color: '#edb705'}}>
                        16 <br/> 17 <br/> 18 <br/> 19 <br/> 20 <br/> 21 <br/> 22 <br/> 23 <br/> 24 <br/>
                        <span style={{color: 'rgba(0, 0, 0, 0)'}}>spacer</span>
                    </span>
                </div>
                <div className='mgp'>
                    <h6 className='mgp-title'>MGP</h6>
                    <div>
                        72 <br/> 180 <br/> 119 <br/> 36 <br/> 306 <br/> 1080 <br/> 144 <br/> 1800 <br/> 3600 <br/>
                        <span style={{color: 'rgba(0, 0, 0, 0)'}}>spacer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payouts;