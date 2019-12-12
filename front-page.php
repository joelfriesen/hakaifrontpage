<?php
/**
 * @package hakaiinstitute
 */
get_header(); ?>
<section id="video-background">
  <h4 class="invis">Welcome to the Hakai Institute</h4>
      <div id="video-overlay" class="col4 container videooverlay">
        <p class="col span4">The <strong>Hakai Institute</strong> conducts long-term scientific research at remote locations on the coastal margin of British Columbia, Canada.</p>
      </div> 
  	  <div id="video-background-container"></div>  
      <div id="video-background-container2"></div>  
     
      <?php 
      require_once 'Mobile_Detect.php';
      $detect = new Mobile_Detect;
      if ( $detect->isMobile() ) { ?>
        <?php if ( (has_post_thumbnail()) && ( get_theme_mod( 'hakaiinstitute_post_img' )) ) { ?>
          <?php $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large');
          the_post_thumbnail(
            array(1900,1900),
            array('class' => 'mainimage')); 
         } else { ?>
        <img width="1900" height="912" src="/wp-content/uploads/Klinaklini_Header-New-1180x566.jpg" class="mainimage wp-post-image" alt="" >
        <?php }; } else { ?>
      <video autoplay loop muted>
        <source src="/wp-content/uploads/loop2.mp4" type="video/mp4">
      </video>
    <?php } ?>
</section>
      <?php

        // WP_Query arguments
        $offset1 = array(
          'posts_per_page'         => '4',
          'offset'                 => '0',
          'cat'                    => 3
        );
        $offset2 = array(
          'posts_per_page'         => '4',
          'offset'                 => '0',
          'cat'                    => 5
        );
      ?>     
      <span id="content"></span>
      <div class="main container col4 frontpagetabs">
        <ul class="tabs "><li class="tab-link current " data-tab="tab-1"><a href="#latestblog">Latest Blogs</a></li><li class="tab-link" data-tab="tab-2"><a href="#latestvideo">Latest Videos</a></li>  
        </ul>
        <section id="tab-1" class="tab-content latestblogs current">
          <h4 class="invis" id="latestblog">Latest Blogs</h4>
          <?php $the_query = new WP_Query($offset1); ?>
          <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <article class="col frontpagethumbholder <?php $categories = get_the_category( $post->ID );foreach( $categories as $category ) {echo $category->slug . ' ';}?>">
              <a href="<?php the_permalink(); ?>">
              <?php
              $image = get_field('thumb');
              $size = 'medium'; // (thumbnail, medium, large, full or custom size)
              if(get_field('thumb')): echo wp_get_attachment_image( $image, $size ) ; else: the_post_thumbnail( array(1000,1000), array('class' => 'frontpagethumb') ); endif;?>
              <header class="frontpagethumbinfo">
                  <h3><?php the_title(); ?></h3>
                </header>
              </a>
            </article>
          <?php endwhile; ?><span class="inter5"><a href="/blog">See more blog posts</a></span>
        </section>
        <section id="tab-2" class="tab-content latestvideos">
          <h4 class="invis" id="latestvideo">Latest Videos</h4>
          <?php $the_query = new WP_Query($offset2); ?>
          <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <article class="col frontpagethumbholder <?php $categories = get_the_category( $post->ID );foreach( $categories as $category ) {echo $category->slug . ' ';}?>">
              <a href="<?php the_permalink(); ?>">
                  <?php
                  $image = get_field('thumb');
                  $size = 'medium'; // (thumbnail, medium, large, full or custom size)
                  if(get_field('thumb')): echo wp_get_attachment_image( $image, $size ) ; else: the_post_thumbnail( array(1000,1000), array('class' => 'frontpagethumb') ); endif;?>
                  <header class="frontpagethumbinfo">
                  <h3><?php the_title(); ?></h3>
                </header>
              </a>
            </article>
          <?php endwhile; ?><span class="inter5"><a href="/video">See more videos</a></span>
         </section>   
      </div>

                
                  <input type="radio" class="years" name="years" value=2019 checked>2019</button>
                  <input type="radio" class="years" name="years" value=2018>2018</button>
                  <input type="radio" class="years" name="years" value=2017>2017</button>
                  <input type="radio" class="years" name="years" value=2016>2016</button>

                  <input type="radio" class="depths" name="depths" value=5 checked>top 5 m</button>
                  <input type="radio" class="depths" name="depths" value=150>145 - 150 m</button>
    




      <div class="charts main container col4 nomobile">
        <hr class="col span4" />
        <h3 class="col span4">The latest data from the Hakai Sensor Network</h3>
        <div class="chart1 col span3">
          <h4 class="STemperature other-tab-title current">Monthly Average Water Temperature, Kwakshua Channel (&deg;C) at surface</h4>
          <h4 class="DTemperature other-tab-title">Monthly Average Water Temperature, Kwakshua Channel (&deg;C) below 150 m</h4>
          <h4 class="SSalinity other-tab-title">Monthly Average Salinity, Kwakshua Channel (Salinity Units) at surface</h4>
          <h4 class="DSalinity other-tab-title">Monthly Average Salinity, Kwakshua Channel (Salinity Units) below 150 m</h4>
          <h4 class="SOxygen other-tab-title">Monthly Average Oxygen, Kwakshua Channel (mL/L) at surface</h4>
          <h4 class="DOxygen other-tab-title">Monthly Average Oxygen, Kwakshua Channel (mL/L) below 150 m</h4>
          <div id="chart"></div>
        </div>
        <div class="chartbuttons col">

           <ul class="othertabs">
              <li class="col tab-link current"><label><input type="radio" class="type" name="type" value="temp" checked>Temperature</input></label></li>
              <li class="col tab-link"><label><input type="radio" class="type" name="type" value="sal">Salinity</input></label></li>
              <li class="col tab-link"><label><input type="radio" class="type" name="type" value="oxy">Dissolved Oxygen</input></label></li>
          </ul>




          

         
          <ul class="thirdtab"><li class="col  smalllineheight ">Looking for more details? <br /><a href="http://data.hakai.org/">Visit the data repository</a></li></ul>
        </div>

        <div id="chart-explain-1" class="STemperature other-tab-content chartexplainer col span4 current">
         <h4>Why do we collect temperature at the surface?</h4>
          <p>Temperature is fundamental to life in the oceans. Waters can change rapidly with tides, storms, waves, and currents. Through frequent data collection, we uncover trends through the seasons and between years.</p>
          <h4>What are we seeing?</h4>
          <p>Waters at the surface warm and cool with the seasons. Over the year, temperatures can change up to 10 &deg;C at the surface. At depth, temperatures are more stable and typically vary by only 2 &deg;C throughout the year.</p>
          <h4>How do we collect this?</h4>
          <p>Sensors that measure temperature, salinity, and oxygen levels are lowered into the ocean from our small boats. At the mouth of Kwakshua Channel, scientists lower the sensors every three to four weeks to collect data.</p>
        </div>
        <div id="chart-explain-2" class="DTemperature other-tab-content chartexplainer col span4 ">
           <h4>Why do we collect temperature below 150 m?</h4>
          <p>Temperature is fundamental to life in the oceans. Waters can change rapidly with tides, storms, waves, and currents. Through frequent data collection, we uncover trends through the seasons and between years.</p>
          <h4>What are we seeing?</h4>
          <p>Counterintuitively, the deep waters of Kwakshua Channel are cooler in the summer than in the winter. Summer winds force cold, deep oceanic water up into coastal channels, like Kwakshua, before retreating in fall and winter.</p>
          <h4>How do we collect this?</h4>
          <p>Sensors that measure temperature, salinity, and oxygen levels are lowered into the ocean from our small boats. At the mouth of Kwakshua Channel, scientists lower the sensors every three to four weeks to collect data.</p>
        </div>
        <div id="chart-explain-3" class="SSalinity other-tab-content chartexplainer col span4">
          <h4>Why do we collect salinity at the surface?</h4>
          <p>In the coastal environment variations in salinity cause the ocean to layer into lighter, fresher bands and denser, saltier bands. These layers can shift seasonally and restrict the movement of nutrients and marine life.</p>
          <h4>What are we seeing?</h4>
          <p>Saltier waters enter Kwakshua Channel during the summer when winds force saline, deep oceanic water up into coastal channels. Fresh water from rain, snow, and glacial melt cause surface waters to freshen. Over time, the fresh water can be moved downward through mixing driven by the wind and tides.</p>
          <h4>How do we collect this?</h4>
          <p>Sensors that measure temperature, salinity, and oxygen levels are lowered into the ocean from our small boats. At the mouth of Kwakshua Channel, scientists lower the sensors every three to four weeks to collect data.</p>
        </div>
        <div id="chart-explain-4" class="DSalinity other-tab-content chartexplainer col span4">
          <h4>Why do we collect salinity below 150 m?</h4>
          <p>In the coastal environment variations in salinity cause the ocean to layer into lighter, fresher bands and denser, saltier bands. These layers can shift seasonally and restrict the movement of nutrients and marine life.</p>
          <h4>What are we seeing?</h4>
          <p>At this location during the winter, the surrounding ocean influences salinity at the surface. During the rest of the year, fresh water from rivers and streams, as well as coastal currents explain the shifts in salinity.</p>
          <h4>How do we collect this?</h4>
          <p>Sensors that measure temperature, salinity, and oxygen levels are lowered into the ocean from our small boats. At the mouth of Kwakshua Channel, scientists lower the sensors every three to four weeks to collect data.</p>
        </div>
        <div id="chart-explain-5" class="SOxygen other-tab-content chartexplainer col span4">
          <h4>Why do we collect oxygen at the surface?</h4>
          <p>For all marine life except a few hearty microbes, oxygen dissolved in seawater is essential. As ocean temperatures warm with climate change, they will be unable to hold as much oxygen. We measure oxygen to track how both seasonal and long-term changes affect the health of ocean life.</p>
          <h4>What are we seeing?</h4>
          <p>Deepwater oxygen levels in Kwakshua Channel decline throughout the summer, in part because bacteria use up oxygen while they feast on dead phytoplankton and other organic material that rains down from the surface. Oxygen levels rebound in winter when tides and winds mix the water column.</p>
          <h4>How do we collect this?</h4>
          <p>Sensors that measure temperature, salinity, and oxygen levels are lowered into the ocean from our small boats. At the mouth of Kwakshua Channel, scientists lower the sensors every three to four weeks to collect data.</p>
        </div>
        <div id="chart-explain-6" class="DOxygen other-tab-content chartexplainer col span4">
          <h4>Why do we collect oxygen below 150 m?</h4>
          <p>For all marine life except a few hearty microbes, oxygen dissolved in seawater is essential. As ocean temperatures warm with climate change, they will be unable to hold as much oxygen. We measure oxygen to track how both seasonal and long-term changes affect the health of ocean life.</p>
          <h4>What are we seeing?</h4>
          <p>When phytoplankton blooms during the summer, the process of photosynthesis creates oxygen at the surface.</p>
          <h4>How do we collect this?</h4>
          <p>Sensors that measure temperature, salinity, and oxygen levels are lowered into the ocean from our small boats. At the mouth of Kwakshua Channel, scientists lower the sensors every three to four weeks to collect data.</p>
        </div>
      </div>
      <h4 class="invis">See a special interactive map</h4>
      <section class="interactivemap">
        <div class="container col4">
          <div class="infobox col span2 fancy-border ">
            <span class="inter1">Interactive Map</span><br />
            <span class="inter2">~ of the ~</span><br />
            <span class="inter3">Hakai Institute</span><br />
            <span class="inter5"><a href="/location/">See the full map</a></span>
          </div>
        </div>
        <div class="top"></div>
        <div class="bottom"></div>
        <div id="parallax-bg1" class="maplayer"></div>
        <div id="parallax-bg2" class="subwaylayer"></div>
      </section>
      <h4 class="invis">More details about Hakai Institute and the Tula Foundation</h4>
      <footer class="footer"> 
        <div class="main container col6 hakaifamily">
          <div class="foottext col halfcol">
            <img src="/wp-content/themes/HakaiInstitute/images/tula_logo.png" alt="logo for the Tula Foundation" />
          </div>
          <div class="col span2 smalllineheight halfcol">
            <p>We are part of the Tula Foundation, which is governed by three core values: solid science, community engagement, and social justice.<br/><a href="https://tula.org/">Find out more »</a></p>
          </div>
          <div class="foottext col halfcol">
            <img src="/wp-content/themes/HakaiInstitute/images/hakaimagazine_logo.png" alt="logo for Hakai Magazine" />
          </div>
          <div class="col span2 smalllineheight halfcol">
            <p><em>Hakai Magazine</em>, also part of the Tula Foundation, is an editorially independent publication exploring science and society from a coastal perspective.<br/><a href="https://www.hakaimagazine.com/">Find out more »</a></p>
          </div>
        </div>
      <?php get_footer(); ?>