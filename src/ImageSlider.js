import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import React from 'react'

const ImageSlider = ({ images }) => {

  const settings = {
    flex: 4,
    justifyContent: 'center',
    minheight: 200,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,

  };
  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae. Nisi quis eleifend quam adipiscing vitae proin. Elementum nisi quis eleifend quam adipiscing. Enim blandit volutpat maecenas volutpat blandit. Volutpat sed cras ornare arcu dui. Egestas fringilla phasellus faucibus scelerisque eleifend. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Metus vulputate eu scelerisque felis imperdiet. Odio euismod lacinia at quis risus sed.

        Viverra nam libero justo laoreet sit amet cursus. Morbi tristique senectus et netus et malesuada fames ac turpis. Faucibus vitae aliquet nec ullamcorper sit amet. Nibh sit amet commodo nulla. Quis auctor elit sed vulputate mi sit amet mauris. Massa eget egestas purus viverra accumsan. Congue quisque egestas diam in arcu cursus euismod quis. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Sapien pellentesque habitant morbi tristique senectus et netus et. In massa tempor nec feugiat nisl pretium fusce id. Imperdiet dui accumsan sit amet nulla facilisi morbi. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Eu volutpat odio facilisis mauris sit amet massa vitae. Vel pretium lectus quam id leo in. Purus ut faucibus pulvinar elementum integer. Neque ornare aenean euismod elementum nisi. Fermentum posuere urna nec tincidunt praesent. Amet volutpat consequat mauris nunc congue nisi vitae.

        Sem et tortor consequat id porta nibh. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Libero nunc consequat interdum varius sit amet mattis. Sed lectus vestibulum mattis ullamcorper velit sed. Blandit massa enim nec dui nunc. Nisl vel pretium lectus quam id leo in vitae turpis. Posuere morbi leo urna molestie at elementum eu facilisis. Sed risus ultricies tristique nulla. Hendrerit dolor magna eget est. Adipiscing elit pellentesque habitant morbi tristique senectus. Nisl pretium fusce id velit. Curabitur gravida arcu ac tortor. Enim sit amet venenatis urna. Tristique et egestas quis ipsum suspendisse ultrices gravida. Purus ut faucibus pulvinar elementum integer enim. Cursus vitae congue mauris rhoncus.

        Nec tincidunt praesent semper feugiat nibh. Semper auctor neque vitae tempus quam pellentesque nec nam. Ac auctor augue mauris augue neque gravida. Faucibus a pellentesque sit amet. Massa vitae tortor condimentum lacinia. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl rhoncus mattis rhoncus urna neque viverra justo. Id ornare arcu odio ut sem nulla.

        Massa sed elementum tempus egestas. Nec ullamcorper sit amet risus nullam eget. Nec dui nunc mattis enim ut tellus elementum. Enim nulla aliquet porttitor lacus luctus. Tortor condimentum lacinia quis vel eros. Sed vulputate mi sit amet mauris commodo quis. Cursus euismod quis viverra nibh cras pulvinar mattis. In eu mi bibendum neque egestas congue. Donec enim diam vulputate ut pharetra sit amet aliquam id. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Fermentum posuere urna nec tincidunt praesent. Dictum varius duis at consectetur lorem. Vel fringilla est ullamcorper eget. Neque vitae tempus quam pellentesque nec nam. Massa massa ultricies mi quis hendrerit dolor. Donec massa sapien faucibus et molestie. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Ac auctor augue mauris augue neque gravida in fermentum et. Enim sed faucibus turpis in eu mi bibendum neque. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper.

        Vestibulum lorem sed risus ultricies tristique nulla. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Aliquet eget sit amet tellus cras adipiscing. Tempor orci eu lobortis elementum nibh tellus. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Elit sed vulputate mi sit amet mauris. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eget nullam non nisi est sit amet. Quis blandit turpis cursus in hac. Integer quis auctor elit sed vulputate. Placerat vestibulum lectus mauris ultrices eros in cursus. At varius vel pharetra vel. Erat nam at lectus urna duis convallis convallis tellus. Ut sem nulla pharetra diam. Nunc aliquet bibendum enim facilisis gravida neque convallis. Neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Massa ultricies mi quis hendrerit dolor magna eget est.

        Feugiat nisl pretium fusce id velit ut tortor pretium. At elementum eu facilisis sed odio. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Mattis nunc sed blandit libero volutpat sed. In metus vulputate eu scelerisque felis imperdiet. Nibh praesent tristique magna sit amet purus gravida. Neque ornare aenean euismod elementum. In fermentum et sollicitudin ac orci phasellus egestas. Aliquam malesuada bibendum arcu vitae elementum. Tortor vitae purus faucibus ornare suspendisse. Erat velit scelerisque in dictum non consectetur a. Nibh tellus molestie nunc non blandit massa enim. Sollicitudin ac orci phasellus egestas. Pretium nibh ipsum consequat nisl vel pretium lectus. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Dictumst vestibulum rhoncus est pellentesque.

        Nam libero justo laoreet sit amet cursus sit amet. Viverra orci sagittis eu volutpat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Vitae turpis massa sed elementum tempus egestas sed sed. Aenean et tortor at risus viverra adipiscing at in tellus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nunc congue nisi vitae suscipit. Mollis nunc sed id semper risus in. Nibh tellus molestie nunc non blandit massa enim nec dui. Quis enim lobortis scelerisque fermentum dui faucibus in. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Consectetur lorem donec massa sapien faucibus et. Sed sed risus pretium quam vulputate dignissim suspendisse. Vitae congue eu consequat ac. Tortor posuere ac ut consequat semper viverra nam libero. Eu sem integer vitae justo eget magna. Enim nunc faucibus a pellentesque sit amet porttitor. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Donec massa sapien faucibus et molestie ac feugiat.

        Duis at consectetur lorem donec massa sapien faucibus et molestie. Risus viverra adipiscing at in tellus integer feugiat. Sed velit dignissim sodales ut eu sem integer vitae. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Massa placerat duis ultricies lacus sed turpis tincidunt. Tristique senectus et netus et. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Ornare aenean euismod elementum nisi quis eleifend quam. Maecenas pharetra convallis posuere morbi leo urna molestie. Scelerisque viverra mauris in aliquam sem. Id aliquet risus feugiat in ante. Tristique sollicitudin nibh sit amet commodo. Faucibus turpis in eu mi bibendum neque. Ultrices gravida dictum fusce ut placerat orci. Id diam vel quam elementum pulvinar. Proin sagittis nisl rhoncus mattis rhoncus. Bibendum enim facilisis gravida neque convallis. Eleifend quam adipiscing vitae proin sagittis nisl. Eu mi bibendum neque egestas.

        Nibh venenatis cras sed felis eget velit aliquet sagittis. Sit amet mauris commodo quis imperdiet massa. Turpis cursus in hac habitasse. At risus viverra adipiscing at in tellus integer feugiat. Enim praesent elementum facilisis leo. Neque viverra justo nec ultrices dui. Urna id volutpat lacus laoreet non curabitur gravida. At augue eget arcu dictum. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Vel facilisis volutpat est velit egestas dui id ornare arcu. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Lacus sed turpis tincidunt id. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Odio pellentesque diam volutpat commodo. Massa eget egestas purus viverra accumsan in.</p>

      <div className="container">
        <div className="head1" >
          <div className="heading">
            <h3>Recent Events</h3>
          </div>
          <div className="rectangle">

          </div>
        </div>

        <div className="grp562" >
          <Slider {...settings} style={{
            top: "14%", bottom: "14%",



          }}>
            {images.map((items) => (
              <div key={items.id} >


                <div className="head2">
                  <h3   > {items.text}</h3>
                  <img src={items.src} alt={items.alt} />
                  {/* could not show the elements after inherting */}

                </div>
                <div className="content">
                  <p>{items.content}</p>
                </div>

              </div>
            ))}
          </Slider>
        </div>

        <div className="poly1"></div>

        <div className="poly2">

        </div>

        <div className="ellipse4">

        </div>
        <div className="ellipse3">

        </div>



      </div>


    </>
  )
}
export default ImageSlider;