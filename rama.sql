-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2016 at 03:52 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.5.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rama`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `ID` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Subtitle` varchar(255) DEFAULT NULL,
  `Content` text,
  `UserID` int(11) NOT NULL,
  `DateSubmited` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Slug` varchar(255) DEFAULT NULL,
  `ImageURL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`ID`, `Title`, `Subtitle`, `Content`, `UserID`, `DateSubmited`, `Slug`, `ImageURL`) VALUES
(1, 'How to make stir fry', NULL, 'Sample Text Sample Text Sample Text<div id="wrapper" style="text-align: center"><div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/Qhq1FDL0NNQ?start=14&end=114&version=3&autoplay=0" frameborder="0" allowfullscreen></iframe></div></div>', 1, '2016-07-27 12:20:05', 'how-to-make-stir-fry', ''),
(2, 'SAMPLE TEXT SAMPLE TEXT ', NULL, '\r\n    <div>\r\n        <h3>hello</h3>\r\n        <h4>there</h4>\r\n    </div>', 2, '2016-07-27 15:10:40', 'sample-text-sample', ''),
(3, 'Joji Back at it Again!', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque montla ali', '<div style="text-align: center"><div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/unAKRNJofFw" frameborder="0" allowfullscreen></iframe></div></div>', 4, '2016-08-05 12:57:37', 'joji-back-at-it-again', 'http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_ukaavUI.jpg'),
(4, 'VIMEO', NULL, '<iframe src="//player.vimeo.com/video/80836225?badge=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 5, '2016-07-27 15:32:47', 'vimeo', ''),
(6, 'So original m5', NULL, 'sdasdsada\r\nSample Text Sample Text Sample Text\r\n<div id="wrapper" style="text-align: center">\r\n    <div class="embed-responsive embed-responsive-16by9">\r\n        <iframe width="560" height="315" src="https://www.youtube.com/embed/Qhq1FDL0NNQ?start=14&end=114&version=3&autoplay=0" frameborder="0" allowfullscreen></iframe>\r\n    </div>\r\n</div>', 3, '2016-07-27 16:03:07', 'so-original', ''),
(10, 'Ravida is the greatest poet', NULL, 'ravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Viv', 4, '2016-07-28 14:40:35', 'ravida-is-the-greatest-poet', ''),
(11, 'Coldplay new album bla bla it''s good', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque montla ali', 't, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, vt, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, v', 1, '2016-07-28 14:49:24', 'slug-slug', 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg'),
(14, 'New Movie - Ghost Town', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque montla ali', 'planininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisd', 4, '2016-07-28 19:14:59', 'bale-saka-snikers', 'http://www.w3schools.com/css/trolltunga.jpg'),
(15, 'Checking Make a post', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc.', 1, '2016-07-29 16:38:28', 'checking-make-a-post', 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg'),
(16, 'Real Answers RAMA', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque montla ali', 'Today, on the tonight show... blallbalbla', 1, '2016-08-03 00:48:08', 'real-answers-rama', 'http://i.dailymail.co.uk/i/pix/2016/03/22/13/32738A6E00000578-3504412-image-a-6_1458654517341.jpg'),
(25, 'Let me just fix this', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque montla ali', 'Thank you very much', 1, '2016-08-05 12:24:23', 'let-me-just-fix-this', 'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'),
(27, 'High Power', 'avida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque montla ali', 'met, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, viverra odio eget, blandit odio. Duis in velit lacinia, dapibus enim non, molestie augue. Donec at tempus nisl. Aliquam erat volutpat. Praesent imperdiet ante ex, sed posuere quam lacinia sed. Morbi accumsan pellentesque smet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, viverra odio eget, blandit odio. Duis in velit lacinia, dapibus enim non, molestie augue. Donec at tempus nisl. Aliquam erat volutpat. Praesent imperdiet ante ex, sed posuere quam lacinia sed. Morbi accumsan pellentesque s', 1, '2016-08-09 14:11:15', 'high-power', 'http://brucerosenstein.com/wp-content/uploads/2013/07/Summer-happiness-photo.jpg'),
(28, 'Lorem Lorem', 'This is Lorem Lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, viverra odio eget, blandit odio.\n###Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivamus et lorem tincidunt, pharetra nibh sit amet, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, viverra odio eget, blandit odio.', 4, '2016-08-10 11:53:41', 'lorem-lorem', 'https://d1avok0lzls2w.cloudfront.net/img_uploads/changing-urls-0(2).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `UserName` varchar(32) NOT NULL,
  `FirstName` varchar(32) DEFAULT NULL,
  `LastName` varchar(32) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(32) NOT NULL,
  `UserRole` enum('0','1') NOT NULL DEFAULT '0',
  `SignUpDate` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `UserName`, `FirstName`, `LastName`, `Email`, `Password`, `UserRole`, `SignUpDate`) VALUES
(1, 'AquaSolid', 'Filip', 'Markoski', 'filip.markoski45@gmail.com', 'password', '1', '2016-07-20 13:07:54'),
(2, 'BubbleTrouble', 'Bobby', 'Toddson', 'bobby.toddson@gmail.com', 'password1', '0', '2016-07-20 13:39:37'),
(3, 'TommyGun', 'Tommy', 'Larson', 'tommy.larson@gmail.com', 'password2', '0', '2016-07-20 13:45:01'),
(4, 'LeYoBoY', 'Le', 'Yo', 'leyo@live.com', 'jimjimjim', '0', '2016-07-22 14:09:46'),
(5, 'GoGordon', 'Gnash', 'Gordon', 'go.gordon@gmail.com', 'password3', '0', '2016-07-25 09:09:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Title` (`Title`),
  ADD UNIQUE KEY `SlugIndex` (`Slug`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UserName` (`UserName`),
  ADD UNIQUE KEY `EmailUnique` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `BelongTo` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
