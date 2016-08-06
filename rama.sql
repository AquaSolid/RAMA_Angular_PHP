-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2016 at 08:28 PM
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
  `Content` text,
  `UserID` int(11) NOT NULL,
  `DateSubmited` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`ID`, `Title`, `Content`, `UserID`, `DateSubmited`, `Slug`) VALUES
(1, 'How to make stir fry', 'Sample Text Sample Text Sample Text<div id="wrapper" style="text-align: center"><div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/Qhq1FDL0NNQ?start=14&end=114&version=3&autoplay=0" frameborder="0" allowfullscreen></iframe></div></div>', 1, '2016-07-27 12:20:05', 'how-to-make-stir-fry'),
(2, 'SAMPLE TEXT SAMPLE TEXT ', '\r\n    <div>\r\n        <h3>hello</h3>\r\n        <h4>there</h4>\r\n    </div>', 2, '2016-07-27 15:10:40', 'sample-text-sample'),
(3, 'Joji Back at it Again!', '<div style="text-align: center"><div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/unAKRNJofFw" frameborder="0" allowfullscreen></iframe></div></div>', 4, '2016-08-05 12:57:37', 'joji-back-at-it-again'),
(4, 'VIMEO', '<iframe src="//player.vimeo.com/video/80836225?badge=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 5, '2016-07-27 15:32:47', 'vimeo'),
(6, 'So original m5', 'sdasdsada\r\nSample Text Sample Text Sample Text\r\n<div id="wrapper" style="text-align: center">\r\n    <div class="embed-responsive embed-responsive-16by9">\r\n        <iframe width="560" height="315" src="https://www.youtube.com/embed/Qhq1FDL0NNQ?start=14&end=114&version=3&autoplay=0" frameborder="0" allowfullscreen></iframe>\r\n    </div>\r\n</div>', 3, '2016-07-27 16:03:07', 'so-original'),
(10, 'Ravida is the greatest poet', 'ravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Vivravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Aenean in ullamcorper magna, vitae fermentum leo. Viv', 4, '2016-07-28 14:40:35', 'ravida-is-the-greatest-poet'),
(11, 'Coldplay new album bla bla it''s good', 't, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, vt, consectetur sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis ligula aliquet, v', 1, '2016-07-28 14:49:24', 'slug-slug'),
(14, 'New Movie - Ghost Town', 'planininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisdplanininaisd', 4, '2016-07-28 19:14:59', 'bale-saka-snikers'),
(15, 'Checking Make a post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ligula at nulla imperdiet gravida. Vivamus quis justo fermentum, lobortis leo sed, scelerisque nunc.', 1, '2016-07-29 16:38:28', 'checking-make-a-post'),
(16, 'Real Answers RAMA', 'Today, on the tonight show... blallbalbla', 1, '2016-08-03 00:48:08', 'real-answers-rama'),
(24, 'back to sleep', 'changeworkedSSS', 1, '2016-08-04 15:27:30', 'back-to-sleep'),
(25, 'Let me just fix this', 'Thank you very much', 1, '2016-08-05 12:24:23', 'let-me-just-fix-this'),
(26, 'oberseve', 'oberseve', 1, '2016-08-05 12:52:19', 'oberseve'),
(27, 'High Power', 'Taking', 1, '2016-08-06 15:01:04', 'high-power'),
(40, 'testestes', 'threes', 1, '2016-08-06 19:08:11', 'testestes'),
(41, 'adsdas', 'dsadsaasd', 1, '2016-08-06 19:33:49', 'adsdas');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
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
