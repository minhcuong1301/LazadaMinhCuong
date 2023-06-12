import {useEffect, useState} from "react";
import ContentHeader from "../../components/common/contentHeader";
import {USER} from "../../helpers/constants";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
// import {useDispatch, useSelector} from "react-redux";
import profileApis from "../../api/baseAdmin/profile";
// import { updateAuthUser } from "../../features/auth/authSlice";


export default function ProfileIndex()
{
    // const auth = useSelector(state => state.auth);
    // const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue
    } = useForm({
        defaultValues: {
            name: '',
            avatar: null
        }
    });
    const [breadcrumb] = useState([
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Profile',
            link: 'profile'
        },
    ]);
    const [title] = useState('Profile');
    const[profile,setProfile]=useState({});
    useEffect(() => {
    //     if (auth.user) {
    //         setValue('name', auth.user?.name)
    //     }
    // }, [auth.user])
    (async () => {
                const profileResponse = await profileApis.show();
                if (profileResponse.success) {
                    setProfile(profileResponse.data);
                    setValue('name', profileResponse.data.name)
                    // setValue('email', profileResponse.data.email)
                    // setValue('phone', profileResponse.data.phone)
                    // setValue('level', profileResponse.data.level.toString())
                }
                }   
    )()

    }, [])
   console.log(profile);
    const update = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);

        if (data.avatar) {
            formData.append('avatar', data.avatar[0]);
        }
        // try {
        //     const updateProfileResponse = await profileApis.update(formData);

        //     if (updateProfileResponse.success) {
        //         const profileResponse = await profileApis.show();

        //         if (profileResponse.success) {
        //             dispatch(updateAuthUser(profileResponse.data));
        //             toast.success(() => <p>Update profile thành công!</p>);

        //             return;
        //         }
        //         throw new Error();
        //     }
        //     throw new Error();
        // } catch (e) {
        //     toast.error(() => <p>Update profile thất bại</p>);
        // }
        const updateProfileResponse = await profileApis.update(formData);
        if (updateProfileResponse.success) {
            const profileResponse = await profileApis.show();
            toast.success(() => <p>Chỉnh sửa profile <b>{data.name}</b> thành công!</p>);
           
            return;
        }

        if (!updateProfileResponse.errors.length) {
            toast.error(() => <p>Chỉnh sửa profile <b>{data.name}</b> thất bại!</p>);
        }
     
    };

    return (
        <>
            <ContentHeader breadcrumb={breadcrumb}/>
            <section className={'content profile'}>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className="card mb-3">
                                <div className="card-header text-white bg-success">
                                    <h3 className="card-title">{ title }</h3>
                                </div>
                                <form onSubmit={handleSubmit(update)}>
                           
                                    <div className={'p-3 col-6'}>
                                        <div className="mb-3">
                                            {/* <img src={auth.user?.avatarUrl} className={"mb-2 avatar"} alt={"avatar user"}/> */}
                                            <img src=""className={"mb-2 avatar"} alt={"avatar user"}/>
                                            <input
                                                type="file"
                                                className="form-control"
                                                {...register('avatar', {
                                                    maxLength: {
                                                        value: 50,
                                                        message: "Họ tên không được lớn hơn 50 ký tự"
                                                    }
                                                })}
                                            />
                                            {errors.name && <p className={'text-danger fw-bold'}>{errors.name.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputName" className="form-label">Họ tên <span className={'text-danger fw-bold'}>*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputName"
                                                {...register('name', {
                                                    required:'Họ tên không được để trống',
                                                    maxLength: {
                                                        value: 50,
                                                        message: "Họ tên không được lớn hơn 50 ký tự"
                                                    }
                                                })}
                                            />
                                            {errors.name && <p className={'text-danger fw-bold'}>{errors.name.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputName" className="form-label">Email <span className={'text-danger fw-bold'}>*</span></label>
                                            <input
                                                disabled={true}
                                                type="email"
                                                className="form-control"
                                                value={ profile?.email }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputPhone" className="form-label">Số điện thoại <span className={'text-danger fw-bold'}>*</span></label>
                                            <input
                                                disabled={true}
                                                type="text"
                                                className="form-control"
                                                value={ profile?.phone }
                                            />
                                        </div>
                                        <div className={'mb-3'}>
                                            <div>
                                                <label className="form-label">Phân quyền <span className={'text-danger fw-bold'}>*</span></label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="inputLevelAdmin"
                                                    checked={ profile?.level === USER.levels.admin.value}
                                                    disabled={true}
                                                />
                                                <label className="form-check-label" htmlFor="inputLevelAdmin">
                                                    { USER.levels.admin.label }
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="inputLevelUser"
                                                    checked={ profile?.level === USER.levels.user.value}
                                                    disabled={true}
                                                />
                                                <label className="form-check-label" htmlFor="inputLevelUser">
                                                    { USER.levels.user.label }
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            className={'btn btn-success'}
                                        >
                                            Cập nhật
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}