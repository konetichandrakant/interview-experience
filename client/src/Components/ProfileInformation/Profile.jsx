import React, { useEffect } from 'react'
import { getUserProfile } from '../../Axios/Api';
import ReloadPage from '../CommonComponents/ReloadPage';
import ShowingArticles from '../CommonComponents/ShowingArticles';
import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  const [error, setError] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(
    getUserProfile({ username: username }).then((totaldata) => {
      setDetails(totaldata.data);
    }).catch(() => {
      setError(true);
    })
  );

  return (
    <div>
      {
        error && (
          <h3>
            This user does not exist
          </h3>
        )
      }

      {
        details !== null && (
          <div>
            <div>
              Username:{details.username}
            </div>
            <div>
              Password:{details.password}
            </div>
            <div>
              Phone Number:{details.phoneNumber}
            </div>
            <div>
              Email:{details.email}
            </div>
            <div>
              Articles Published:
              {
                details.articles.map((x, i) => {
                  <ShowingArticles
                    title={details.articles[i].title}
                    views={details.articles[i].views}
                    likes={details.articles[i].likes}
                    noOfComments={details.articles[i].noOfComments} />
                })
              }
            </div>
          </div>

        )
      }

      {
        details === null && (
          <ReloadPage />
        )
      }
    </div>
  )
}

export default Profile