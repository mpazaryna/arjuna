import { useQuery } from '@apollo/client';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import { RESOURCES } from '../graphql';

export function Resources({ title }: { title: string }) {
  const { loading, error, data } = useQuery(RESOURCES);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome {title}
            </h1>
          </div>
          <div id="resources">
            {data?.resources.map(
              (resource: {
                content: any;
                id: Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <div key={resource.id}>
                  <h2>{resource.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: resource.content.html }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
