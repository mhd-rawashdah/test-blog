import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Blog } from "../../common/types";
import { useAppDispatch } from "../../hooks";
import { createBlog } from "../blog/blog.slice";

const CreateBlogPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useAppDispatch();
    const onSubmit = (data: Blog): void => {
        console.log(data)
        // TODO handle submit
        dispatch(createBlog(data));
    }

    return (
        <FromContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Label>
                        <label htmlFor="">Title</label>
                    </Label>
                    <input  className="input" type="text" placeholder="Title" defaultValue={''}  {...register('title', {required: true})} />
                    <p className="error"></p>
                </FormControl>
                <FormControl>
                    <Label>
                        <label htmlFor="">Tags</label>
                    </Label>
                    <input  className="input" type="text" placeholder="Software Engineer, Programming, design pattern"  
                       defaultValue={''} {...register('tags', {required: true})} />
                    <small>Add your tags separate by comma</small>
                    <p className="error"></p>
                </FormControl>
                <FormControl>
                    <Label>
                        <label htmlFor="">Content</label>
                    </Label>
                    <textarea className="input" rows={10} placeholder="Content"  defaultValue={''} {...register('desc', {required: true})}/>
                    <p className="error"></p>
                </FormControl>

                <ButtonContainer>
                    <Button color={'success'} label="Create"></Button>
                </ButtonContainer>
                
            </form>
        </FromContainer>
    )
}

const FromContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > form {
        width: 60vw;
        @media (max-width: 768px) {
          width: 100%;
        }
    }
`

const FormControl = styled.div`
    margin: .7rem 0;
    width: 100%;
    > .input {
        display: block;
        font-size: 16px;
        width: 97%;
        padding: .7rem;
        border: solid 1px var(--label-color);
        border-radius: 3px;
    }
    > small {
        color: var(--label-color);
    }
`
const Label = styled.div`
    margin-bottom: .5rem;
    display: flex;
    > label {
        font-size: 20px;
        font-weight: 500;
    }
`

const ButtonContainer =styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    margin-top: 2rem;
`
export default CreateBlogPage;