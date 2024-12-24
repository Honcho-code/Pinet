import React from 'react'

const WalletHero = () => {
  return (
    <main className="flex flex-col h-full sm:pl-browserLayoutDrawerWidth">
      <div className="wrapper mx-auto flex w-full max-w-2xl flex-1 flex-col sm:justify-center">
        <div className="flex flex-col items-center justify-center mt-24">
          <h2 className='text-2xl font-semibold'>Unlock Pi Wallet</h2>
        </div>

        <div className="mt-10 sm:mt-20 sm:mb-20 mx-4 md:mx-0">
          <div>
            <div>
                <textarea name="passPhrase" placeholder='Enter your 24-word passphrase here' className='w-full px-4 py-4 ring-2 ring-inset ring-gray-300 h-40 md:h-60 rounded-lg text-xl'></textarea>
            </div>
            <div className="block mt-2">
                <a
                className="inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset focus-visible:outline-purple-500 disabled:bg-gray-500 bg-none hover:bg-purple-700 px-4 py-2 w-full mt-4 ring-inset ring-2 ring-purple-500 text-purple-500 font-semibold"
                href=""
                >
                    Unlock With Passphrase
                </a>
                <a
                className="inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset focus-visible:outline-purple-500 disabled:bg-gray-500 text-white bg-purple-500 hover:bg-purple-700 px-4 py-2 w-full mt-4 font-semibold"
                href=""
                >
                    Unlock With Face ID
                </a>
              
            </div>
            <div>
                <p className='text-[16px] md:text-[18px] font-normal pt-5 md:pt-7'>
                    As a non-custodial wallet, your wallet passphrase is exclusovely accesssible only to you. Recovery of passphrase is currently impossible
                </p>
                <p className='text-[16px] md:text-[18px] font-normal pt-5 md:pt-7'>
                    Lost your passphrase? <span className='text-blue-500'><a href="">You can create a new wallet</a></span> but all your money in your previous wallet will be inaccessible
                </p>
                
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WalletHero