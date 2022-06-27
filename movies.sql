-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 11:09 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz001`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) NOT NULL,
  `title` varchar(500) NOT NULL,
  `cover` varchar(200) NOT NULL,
  `release_date` date NOT NULL,
  `director` varchar(150) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `casts` varchar(400) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `cover`, `release_date`, `director`, `description`, `casts`, `created_at`, `updated_at`) VALUES
(1, 'Spider-Man: Homecoming', 'https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg', '2021-10-13', 'Jon Watts', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Tom Holland, Michael Keaton, Robert Downey Jr', '2022-06-24 06:46:25', '2022-06-27 19:30:24'),
(3, 'Spider-man : work from home', 'https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg', '2021-12-25', 'Jon Watts', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Tom Holland, Michael Keaton, Robert Downey Jr', '2022-06-25 01:51:31', '2022-06-27 19:40:22'),
(4, 'TUYUL DAN MBAK YUL', 'https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg', '2021-08-13', 'Jon Watts', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Tom Holland, Michael Keaton, Robert Downey Jr', '2022-06-25 03:56:05', '2022-06-27 19:25:20'),
(5, 'rahmat', 'https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg', '2021-12-17', 'jaenudin', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Tom Holland, Michael Keaton, Robert Downey Jr', '2022-06-25 09:10:50', '2022-06-27 19:32:34'),
(6, 'Thor : Ragnarok', 'https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg', '2021-12-13', 'Jon Watts', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Tom Holland, Michael Keaton, Robert Downey Jr', '2022-06-25 09:30:10', '2022-06-27 19:34:49'),
(7, 'The Lion King', 'https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg', '2021-11-23', 'Jon Watts', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', 'Tom Holland, Michael Keaton, Robert Downey Jr', '2022-06-25 10:13:22', '2022-06-27 19:35:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
