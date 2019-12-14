const validateCreateGame = ({
  title,
  genre,
  platform,
  description,
  image,
  price
}) => {
  let errors = {};
  if (title.length <= 2) {
    errors["title"] = "Title cannot be less than 3 symbols!";
  }
  if (genre.length < 1) {
    errors["genre"] = "Cannot create game without genre!";
  }
  if (platform.length < 1) {
    errors["platform"] = "Cannot create game without platform!";
  }
  if (description.length <= 10) {
    errors["description"] = "Please write description larger than 10 symbols!";
  }
  if (image.length < 1) {
    errors["image"] = "Cannot create game without image!";
  } else {
    if (!image.startsWith("http")) {
      errors["image"] = "Image url must start with http";
    }
  }
  if (price < 0) {
    errors["price"] = "Price can be only positive number!";
  }

  return errors;
};

export default validateCreateGame;
