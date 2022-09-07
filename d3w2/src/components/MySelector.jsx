import { Form } from 'react-bootstrap'

const MySelector = () => {
    
        return (
            <div className="Selector mb-3 ml-4">
                <h1 className="mr-4 text-light titologenerale">TV Shows</h1>
                <Form>
                    <Form.Control as="select" className="bg-transparent">
                        <option>Genres</option>
                        <option>Commedy</option>
                        <option>Triller</option>
                    </Form.Control>
                </Form>
            </div>
        )
    
}

export default MySelector;