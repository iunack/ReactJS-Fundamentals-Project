import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import validateCreateGame from "../../utils/validateCreateGame";
import gameService from "../../services/game-services";
import notify from "../../services/notify";
import GrowingSpinner from "../Spinner/GrowingSpinner";

const GameEdit = props => {
  const id = props.match.params.id;

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [game, setGame] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const game = {
      title,
      genre,
      platform,
      description,
      image,
      price
    };

    const validationErrors = validateCreateGame(game);

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    gameService.edit(id, game).then(res => {
      notify.success(`You successfuly update { ${title} } game!`);
      props.history.push("/");
    });
  };

  useEffect(() => {
    gameService.get(id).then(game => {
      setGame(game.data);
      setTitle(game.data.title);
      setGenre(game.data.genre);
      setPlatform(game.data.platform);
      setDescription(game.data.description);
      setImage(game.data.image);
      setPrice(game.data.price);
    });
  }, []);

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };
  const genreChangeHandler = e => {
    setGenre(e.target.value);
  };
  const platformChangeHandler = e => {
    setPlatform(e.target.value);
  };
  const descriptionChangeHandler = e => {
    setDescription(e.target.value);
  };
  const imageChangeHandler = e => {
    setImage(e.target.value);
  };
  const priceChangeHandler = e => {
    setPrice(e.target.value);
  };

  return (
    <div>
      {game ? (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="title"
              name="title"
              id="title"
              placeholder="Enter game title"
              value={title}
              onChange={titleChangeHandler}
            />
          </FormGroup>
          <FormText className="steam-creategamefeedback">
            {errors["title"] ? errors["title"] : null}
          </FormText>
          <FormGroup>
            <Label for="GenreSelect">Genre</Label>
            <Input
              type="select"
              name="genre"
              id="GenreSelect"
              value={genre}
              onChange={genreChangeHandler}
            >
              <option>Select a genre</option>
              <option>3D Action</option>
              <option>FPS</option>
              <option>MMORPG</option>
              <option>RPG</option>
              <option>Fighting</option>
              <option>Action</option>
              <option>Fun</option>
              <option>Quest</option>
              <option>Logical</option>
              <option>Manager</option>
              <option>Adventure</option>
              <option>Simulator</option>
              <option>Hidden Objects</option>
              <option>Sport</option>
              <option>Strategy</option>
              <option>Racing</option>
              <option>Tactical</option>
              <option>Psycho</option>
              <option>Hentai</option>
            </Input>
          </FormGroup>
          <FormText className="steam-creategamefeedback">
            {errors["genre"] ? errors["genre"] : null}
          </FormText>
          <FormGroup>
            <Label for="PlatformSelect">Platform</Label>
            <Input
              type="select"
              name="platform"
              id="PlatformSelect"
              value={platform}
              onChange={platformChangeHandler}
            >
              <option>Select a platform</option>
              <option>PC</option>
              <option>Linux</option>
              <option>MAC</option>
              <option>Android</option>
              <option>iOS</option>
              <option>PS</option>
              <option>Wii</option>
            </Input>
          </FormGroup>
          <FormText className="steam-creategamefeedback">
            {errors["platform"] ? errors["platform"] : null}
          </FormText>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={description}
              onChange={descriptionChangeHandler}
            />
          </FormGroup>
          <FormText className="steam-creategamefeedback">
            {errors["description"] ? errors["description"] : null}
          </FormText>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              id="image"
              placeholder="Enter game image url"
              value={image}
              onChange={imageChangeHandler}
            />
          </FormGroup>
          <FormText className="steam-creategamefeedback">
            {errors["image"] ? errors["image"] : null}
          </FormText>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              placeholder="Enter game price"
              value={price}
              onChange={priceChangeHandler}
            />
          </FormGroup>
          <FormText className="steam-creategamefeedback">
            {errors["price"] ? errors["price"] : null}
          </FormText>
          <Button color="primary">Edit Game</Button>
        </Form>
      ) : (
        <GrowingSpinner />
      )}
    </div>
  );
};

export default GameEdit;
