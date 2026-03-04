import { PageWrapper, ContainerJoke, JokeCard, Text} from "./styles";
import { useEffect, useState } from "react";
import Button from "components/Button/Button";
import axios from "axios";
import { v4 } from "uuid";

function Homework_10() {
  const [joke, setJoke] = useState<string[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(JOKE_URL);
      console.log(response.data);
        setJoke((prevValue: string[]) => {
          return [...prevValue, `${response.data.setup} ${response.data.punchline}` ];
        });
    } catch (error: any) {
      setError("Some Network error");
    } finally {
      setIsLoading(false);
    }
  };

  const jokes = joke.map((joke: string) => {
    return <Text key={v4()}>{joke}</Text>;
  });

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <JokeCard>
        <ContainerJoke>
          {!!joke && jokes}
          {!!error && <Text>{error}</Text>}
        </ContainerJoke>
        <Button disabled={isLoading} name="Get Random Joke" onClick={getJoke}/>
      </JokeCard>
    </PageWrapper>
  );
}
export default Homework_10;
