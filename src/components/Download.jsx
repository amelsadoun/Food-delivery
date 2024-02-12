import Background2 from '../assets/Background2.png';

export default function Download(){
    return(
        <div className="flex flex-col items-center justify-center px-48 my-10 py-24 pt-32 mt-20" style={{
        backgroundImage: `url(${Background2})` }}>
            <h2 className='font-bold text-subtle-white text-4xl text-center'>Download the app now.</h2>
            <h4 className='my-6 font-medium text-subtle-white text-3xl text-center'>Available on your favorite store. Start your premium experience now</h4>
            <div className="flex-row justify-between my-7">
        <button className="px-7 py-4 text-subtle-white border-solid border-white bg-orange rounded-xl font-bold text-base mx-4">Playstore</button>
        <button className="px-7 py-4 text-subtle-white border-solid border-white border rounded-xl font-bold text-base mx-4">App store</button>
      </div>
        </div>
    )
}