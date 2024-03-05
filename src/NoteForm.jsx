import { useRef, useState } from "react";
import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { v4 as uuidV4 } from "uuid";


const NoteForm = ({
    onSubmit,
    onAddTag,
    availableTags,
    title = "",
    markdown = "",
    tags = []
}) => {
    const titleRef = useRef(null);
    const markdownRef = useRef(null);
    const [selectedTags, setSelectedTags] = useState(tags);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const submittedData = {
            title: titleRef.current?.value,
            markdown: markdownRef.current?.value,
            tags: selectedTags,
        };

        onSubmit(submittedData);

        navigate("..");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required defaultValue={title} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableSelect
                                className="text-dark bg-primary"
                                onCreateOption={label => {
                                    const newTag = { id: uuidV4(), label };
                                    onAddTag(newTag);
                                    setSelectedTags(prev => [...prev, newTag]);
                                }}
                                value={selectedTags.map(tag => ({
                                    label: tag.label, value: tag.id
                                }))}
                                options={availableTags.map(tag => ({
                                    label: tag.label, value: tag.id
                                }))}
                                onChange={tags => {
                                    setSelectedTags(tags.map(tag => ({
                                        label: tag.label, id: tag.value
                                    })));
                                }} 
                                isMulti
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="markdown">
                    <Form.Label>Note</Form.Label>
                    <Form.Control defaultValue={markdown} ref={markdownRef} required as="textarea" rows={15}/>
                </Form.Group>
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                    <Button type="submit" variant="outline-primary" size="lg">Save</Button>
                    <Link to="..">
                        <Button type="button" variant="outline-light" size="lg">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    );
};

export default NoteForm;
