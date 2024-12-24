import React from 'react'
import { useNavigate } from 'react-router-dom'

const WalletHeader = () => {
    const navigate = useNavigate()
    const handleBackBtn = ()=>{
      navigate(-1)
    }
  return (
    <div className="relative z-20 h-browserLayoutAppBarHeight">
    <header className="fixed left-0 right-0 z-20 shadow-md bg-purple-600 text-white py-5 md:py-3">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto md:px-4 h-browserLayoutAppBarHeight px-2">
        <button className="sm:hidden" onClick={handleBackBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="block h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            ></path>
          </svg>
        </button>
        <div className="sm:min-w-[110px] lg:min-w-[195px]" >
          <a
            className="hidden sm:block focus-visible-outline"
            href="/"
            onClick={handleBackBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="42"
              viewBox="0 0 100 42"
              fill="none"
            >
              <path
                fill="#FBB44A"
                d="M15.6 10.638a.32.32 0 0 1 .324-.318h3.134a.32.32 0 0 1 .324.318v2.434a.32.32 0 0 1-.324.318h-3.134a.32.32 0 0 1-.324-.318v-2.434ZM22.084 10.638c0-.175.145-.318.324-.318h3.134c.18 0 .325.143.325.318v2.434a.321.321 0 0 1-.325.318h-3.134a.321.321 0 0 1-.324-.318v-2.434Z"
              ></path>
              <path
                fill="#FBB44A"
                d="M15.6 18.653v12.642l3.782 1.461V18.653h2.702v12.642l3.783 1.461V18.653h2.513c2.074 0 3.755-1.664 3.755-3.716V12.86H28.38v2.077H13.195c-2.074 0-3.755 1.664-3.755 3.716v2.568h3.755v-2.568H15.6Z"
              ></path>
              <path
                fill="#FBB44A"
                fillRule="evenodd"
                d="M21.445 3.23C11.423 3.23 3.3 11.187 3.3 21s8.124 17.77 18.146 17.77S39.591 30.813 39.591 21 31.467 3.23 21.445 3.23ZM0 21C0 9.402 9.601 0 21.445 0S42.89 9.402 42.89 21 33.29 42 21.445 42 0 32.598 0 21Z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#FBB44A"
                d="M54.336 28V15.31h5.634c1.392 0 2.454.336 3.186 1.008.732.672 1.098 1.596 1.098 2.772 0 1.164-.366 2.088-1.098 2.772-.732.684-1.794 1.026-3.186 1.026h-3.312V28h-2.322Zm2.322-6.948H59.7c.768 0 1.344-.168 1.728-.504.384-.348.576-.834.576-1.458s-.192-1.104-.576-1.44c-.384-.348-.96-.522-1.728-.522h-3.042v3.924ZM66.144 28v-9.09h2.25V28h-2.25Zm-.126-10.8v-2.196h2.502V17.2h-2.502Zm5 10.8V15.31h1.746l7.362 9.522h-.468V15.31h2.16V28h-1.746l-7.344-9.522h.45V28h-2.16Zm17.8.18c-1.524 0-2.718-.42-3.582-1.26-.864-.84-1.296-1.992-1.296-3.456 0-.948.186-1.776.558-2.484a4.124 4.124 0 0 1 1.548-1.656c.672-.396 1.452-.594 2.34-.594.876 0 1.608.186 2.196.558a3.482 3.482 0 0 1 1.332 1.566c.312.672.468 1.458.468 2.358v.594h-6.624v-1.188h5.022l-.306.252c0-.84-.18-1.482-.54-1.926-.348-.444-.858-.666-1.53-.666-.744 0-1.32.264-1.728.792-.396.528-.594 1.266-.594 2.214v.234c0 .984.24 1.722.72 2.214.492.48 1.182.72 2.07.72.516 0 .996-.066 1.44-.198a4.217 4.217 0 0 0 1.296-.684l.666 1.512a4.744 4.744 0 0 1-1.548.81c-.6.192-1.236.288-1.908.288Zm9.322 0c-1.08 0-1.896-.282-2.448-.846-.552-.564-.828-1.41-.828-2.538v-4.194h-1.746V18.91h1.746v-2.322l2.25-.576v2.898h2.43v1.692h-2.43v4.05c0 .624.12 1.062.36 1.314s.57.378.99.378c.228 0 .42-.018.576-.054.168-.036.33-.084.486-.144v1.782a2.851 2.851 0 0 1-.684.18c-.24.048-.474.072-.702.072Z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center gap-4">
          <span className="text-xl font-semibold">Wallet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 260 260"
            fill="none"
            width="26"
            height="26"
            className="text-yellow-500"
          >
            <path
              fill="currentColor"
              d="M94.91 66.314c0-1.078.875-1.953 1.954-1.953h18.878c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953H96.863a1.953 1.953 0 0 1-1.953-1.953V66.314ZM133.97 66.314c0-1.078.875-1.953 1.953-1.953h18.879c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953h-18.879a1.953 1.953 0 0 1-1.953-1.953V66.314Z"
            ></path>
            <path
              fill="currentColor"
              d="M94.91 115.616v77.765l22.785 8.992v-86.757h16.275v77.765l22.785 8.992v-86.757h15.14c12.491 0 22.618-10.234 22.618-22.858V79.985h-22.618v12.773H80.422c-12.492 0-22.618 10.234-22.618 22.858v15.798h22.618v-15.798h14.489Z"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M130.122 20.75c-60.368 0-109.305 48.937-109.305 109.305 0 60.367 48.937 109.305 109.305 109.305 60.367 0 109.305-48.938 109.305-109.305 0-60.368-48.938-109.305-109.305-109.305ZM.943 130.055C.943 58.711 58.778.875 130.122.875c71.343 0 129.178 57.836 129.178 129.18 0 71.343-57.835 129.178-129.178 129.178C58.778 259.233.943 201.398.943 130.055Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="sm:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="block h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:block">
          <button className="inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-4 py-2 font-semibold bg-yellow-500 hover:bg-secondary-400 text-gray-700 hover:text-gray-900 focus-visible:outline-secondary-500">
            <span className="inline lg:hidden">Download</span>
            <span className="hidden lg:inline">Download Pi Browser</span>
          </button>
        </div>
      </div>
    </header>
  </div>

  )
}

export default WalletHeader