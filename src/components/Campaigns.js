import {useState, useEffect} from 'react'
import Slider from "react-slick";
import Banners from 'api/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextButton ({ onClick, className }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

export default function Campaigns() {

  const [banners, setBanners] = useState([]);

  useEffect(()=>{
      setBanners(Banners);
  },[])

  const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings} className="-mx-2">
        {banners.length && banners.map((banner,index)=>(

          <div key={index}>
            <div className=" px-2">
              <img src={banner.image} alt="kampanya" className="rounded-lg" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
