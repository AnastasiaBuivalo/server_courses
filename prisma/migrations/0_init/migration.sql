-- CreateTable
CREATE TABLE `all_course` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `descript` VARCHAR(1000) NOT NULL,
    `price` DECIMAL(3, 2) NULL,
    `duration` INTEGER UNSIGNED NULL,
    `img` VARCHAR(100) NULL,
    `lecturer_id` INTEGER UNSIGNED NULL,

    INDEX `lecturer_id`(`lecturer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecturer_course` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `lecturer_id` INTEGER UNSIGNED NULL,
    `course_id` INTEGER UNSIGNED NULL,

    INDEX `course_id`(`course_id`),
    INDEX `lecturer_id`(`lecturer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecturers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `fcs` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `information` VARCHAR(1000) NOT NULL,
    `speciality` VARCHAR(1000) NOT NULL,
    `experience` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_course` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER UNSIGNED NULL,
    `course_id` INTEGER UNSIGNED NULL,

    INDEX `course_id`(`course_id`),
    INDEX `student_id`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `fcs` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `information` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(20) NOT NULL,
    `student_id` INTEGER UNSIGNED NULL,
    `lecturer_id` INTEGER UNSIGNED NULL,

    INDEX `lecturer_id`(`lecturer_id`),
    INDEX `student_id`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `all_course` ADD CONSTRAINT `all_course_ibfk_1` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturers`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `lecturer_course` ADD CONSTRAINT `lecturer_course_ibfk_1` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturers`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `lecturer_course` ADD CONSTRAINT `lecturer_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `all_course`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student_course` ADD CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student_course` ADD CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `all_course`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturers`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

