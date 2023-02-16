import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './Typography.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';


const Typography = () => {
  return (
  <div className={styles.Typography}>
    <PageHeader titles="Typography" active="Typography" items={['Componets']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Default Heading Text</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Examples using standard <code>h1</code> to <code>h6</code> html tags</p>
              <div className="example">
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Heading with color Text</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Examples using standard <code>h1</code> to <code>h6</code> html tags</p>
              <div className="example">
                <h1 className="text-primary">h1. Heading</h1>
                <h2 className="text-secondary">h2. Heading</h2>
                <h3 className="text-success">h3. Heading</h3>
                <h4 className="text-danger">h4. Heading</h4>
                <h5 className="text-info">h5. Heading</h5>
                <h6 className="text-warning">h6. Heading</h6>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Display Headings</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Examples using standard <code>display-1</code> to <code>display-6</code> html tags</p>
              <div className="example">
                <h2 className="display-1">Display 1</h2>
                <h2 className="display-2">Display 2</h2>
                <h2 className="display-3">Display 3</h2>
                <h2 className="display-4">Display 4</h2>
                <h2 className="display-5">Display 5</h2>
                <h2 className="display-6">Display 6</h2>
                <h2 className="display-7">Display 7</h2>
                <h2 className="display-8">Display 8</h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Display headings with color Text</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Examples using standard <code>display-1</code> to <code>display-6</code> html tags</p>
              <div className="example">
                <h2 className="display-1 text-primary">Display 1</h2>
                <h2 className="display-2 text-secondary">Display 2</h2>
                <h2 className="display-3 text-success">Display 3</h2>
                <h2 className="display-4 text-danger">Display 4</h2>
                <h2 className="display-5 text-info">Display 5</h2>
                <h2 className="display-6 text-warning">Display 6</h2>
                <h2 className="display-7 text-pink">Display 7</h2>
                <h2 className="display-8 text-lime">Display 8</h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Line Height</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Utilities for controlling the leading (line height) of an element.</p>
              <div className="example">
                <p className="leading-none">Lorem ipsum dolor sit amet.<br /> Dolor sit amet.
                </p>
                <p className="leading-tight">Lorem ipsum dolor sit amet.<br /> Dolor sit amet.
                </p>
                <p className="leading-normal">Lorem ipsum dolor sit amet.<br /> Dolor sit amet.
                </p>
                <p className="leading-loose m-0">Lorem ipsum dolor sit amet.<br /> Dolor sit amet.
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Inline text elements</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <p>You can use the mark tag to <mark>highlight</mark> text.</p>
              <p><del>This line of text is meant to be treated as deleted text.</del></p>
              <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
              <p><u>This line of text will render as underlined.</u></p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p><strong>This line rendered as bold text.</strong></p>
              <p className="mb-0"><em>This line rendered as italicized text.</em></p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Text alignment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Easily realign text to components with text alignment classes.</p>
              <div className="example">
                <p className="text-start">Left aligned text on all viewport sizes.</p>
                <p className="text-center">Center aligned text on all viewport sizes.</p>
                <p className="text-end">Right aligned text on all viewport sizes.</p>
                <p className="text-justify m-0">Both aligned text on all viewport sizes. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}

    {/* <!-- ROW-4 OPEN --> */}
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Paragraph Text</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                  ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className="lead">Most designers set their type arbitrarily, either by pulling values out of the sky or by adhering to a baseline grid. The former case isn’t worth discussing here, but the latter requires a closer look.</p>
                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Letter spacing</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Utilities for controlling the tracking (letter spacing) of an element.</p>
              <div className="example">
                <p className="tracking-tight">Lorem ipsum dolor sit amet. Tight letter spacing.</p>
                <p className="tracking-normal">Lorem ipsum dolor sit amet. Normal letter spacing.</p>
                <p className="tracking-wide m-0">Lorem ipsum dolor sit amet. Wide letter spacing.</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-4 CLOSED --> */}

    {/* <!-- ROW-5 OPEN --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Description list alignment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <Row>
                <Col sm={3}>Description lists</Col>
                <Col sm={9}>A description list is perfect for defining terms.</Col>

                <Col sm={3}>Term</Col>
                <Col sm={9}>
                  <p>Definition for the term.</p>
                  <p>And some more placeholder definition text.</p>
                </Col>

                <Col sm={3}>Another term</Col>
                <Col sm={9}>This definition is short, so no extra paragraphs or anything.</Col>

                <Col sm={3} className="text-truncate">Truncated term is truncated</Col>
                <Col sm={9}>This can be useful when space is tight. Adds an ellipsis at the end.</Col>

                <Col sm={3}>Nesting</Col>
                <Col sm={9}>
                  <Row>
                    <Col sm={4}>Nested definition list</Col>
                    <Col sm={8}>I heard you like definition lists. Let me put a definition list inside your definition list.</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-5 CLOSED --> */}

    {/* <!-- ROW-6 OPEN --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Blockquotes</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>The HTML spec requires that blockquote attribution be placed outside the <code className="highlighter-rouge">&lt;blockquote&gt;</code>.</p>
            <div className="example mb-5">
              <blockquote className="blockquote">
                <p className="mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
            <p>Use text utilities as needed to change the alignment of your blockquote..</p>
            <div className="example mb-5">
              <blockquote className="blockquote text-center">
                <p className="mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
            <p>The HTML spec requires that blockquote attribution be placed in the <code className="highlighter-rouge">.blockquote-reverse</code>.</p>
            <div className="example">
              <blockquote className="blockquote blockquote-reverse">
                <p className="mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-6 CLOSED --> */}
  </div>
)
};

export default Typography;
