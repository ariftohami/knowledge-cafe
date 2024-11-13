import profile from'../../assets/image/author.jpeg'

const Header = () => {
  return (
      <>
          <div className='flex justify-between items-center m-[20px] border-b-2 max-w-7xl mx-auto ' >
              <h1 className="font-bold text-3xl"  >Knowledge Cafe</h1>
              <img className='w-[50px] h-[50px] rounded-full' src={profile} alt="" />

            </div>
      
      </>
  )
}

export default Header