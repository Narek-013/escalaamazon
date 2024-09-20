import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Help from '../Help/Help';
import Button from '../../uikit/Button/Button';
import { Image } from '../../Images/Image';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/slices/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { changeProduct, selectProducts } from '../../store/slices/products/productsSlice';

type ProductType = {
  _id: string,
  name: string,
  price: number,
  description: string,
  type: string,
  images: [string],
  userId: string,
  createdAt: string,
  updatedAt: string,
  __v: number
};

const Product: React.FC = () => {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch()
  const [price, setPrice] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]); // Для хранения всех загруженных файлов
  const { userToken } = useSelector(usersSelector);
  const { changedProduct, productsData } = useSelector(selectProducts)
  const navigate = useNavigate();
  const [initialProduct, setInitialProduct] = useState<any>(null)
  const [typesData, setTypesData] = useState([
    {
      id: '1',
      value: 'Handmade',
      toggle: false
    },
    {
      id: '2',
      value: 'Ceramic',
      toggle: false
    },
    {
      id: '3',
      value: 'Textile',
      toggle: false
    },
    {
      id: '4',
      value: 'Paper',
      toggle: false
    },
    {
      id: '5',
      value: 'Various',
      toggle: false
    },
  ])

  useEffect(() => {
    if (!userToken || userToken === '') {
      navigate('/login');
    }
  }, [userToken, navigate]);

  useEffect(() => {
    if (changedProduct) {
      if (productsData.find(el => el._id === changedProduct)) {
        setInitialProduct({ ...productsData.find(el => el._id === changedProduct) })
      }
    }
    if(initialProduct?.type) {
      setTypesData([
        ...typesData.map(el => ({
          ...el,
          toggle: el.value === initialProduct.type
        }))
      ])
    }
    return () => {
      dispatch(changeProduct(null));
    };
  }, [changedProduct])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files) {
      const updatedFiles = [...files];
      updatedFiles[index] = e.target.files[0]; // Обновление файла в соответствующем индексе
      setFiles(updatedFiles);
    }
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, e.target.files[0]]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('type', type);
    formData.append('files', files[0])

    try {
      const response = await axios.post(initialProduct._id ? `https://bazaaar.deals/api/product${initialProduct._id}` : 'https://bazaaar.deals/api/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userToken}`,
        },
      });
      navigate('/dashboard')
      dispatch(changeProduct(null))
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="product">
      <div className="product__container _container">
        <Help />
        <div className="product-right">
          <h1>Give your products a name and description</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisc.</p>
          <form className="product-inputs" onSubmit={handleSubmit}>
            <div className="flex">
              <label>
                <input
                  type="text"
                  placeholder="Product name"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={initialProduct ? initialProduct.name : ''}
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Price"
                  defaultValue={initialProduct ? initialProduct.price : ''}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>
            <label className="inputs-area">
              <textarea
                placeholder="Description"
                defaultValue={initialProduct ? initialProduct.description : ''}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <div className="success-button">
              {
                typesData.map(el => (
                  <button key={el.id} type="button" className={el.toggle ? 'active' : ''} onClick={() => {
                    setType(el.value)
                    setTypesData([
                      ...typesData.map(type => ({
                        ...type,
                        toggle: el.id === type.id
                      }))
                    ])
                  }}>{el.value}</button>
                ))
              }
            </div>
            <div className="products-img-grid">
              {
                initialProduct?.images?.length ? (
                  initialProduct.images.map((el: string, idx: number) => (
                    <label className="product-img" key={idx}>
                      <input type="file" onChange={(e) => handleFileChange(e, idx)} />
                      <img src={`https://bazaaar.deals/api/images/${el}`} alt="" className="added-img" />
                    </label>
                  ))
                ) : files.map((file, index) => (
                  <label className="product-img" key={index}>
                    <input type="file" onChange={(e) => handleFileChange(e, index)} />
                    {file && <img src={URL.createObjectURL(file)} alt="Uploaded" className="added-img" />}
                  </label>
                ))
              }

              {files.length < 5 && (
                <label className="product-img">
                  <input type="file" onChange={handleAddFile} />
                  <img src={Image.productPlyus} alt="Add" /> Add a New Image
                </label>
              )}
            </div>
            <div className="product-button">
              <Button title="Send to review" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Product;