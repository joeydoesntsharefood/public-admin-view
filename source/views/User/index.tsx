import Button from "@/source/components/Button";
import DropDown from "@/source/components/DropDown";
import Footer from "@/source/components/FooterDrawer/footer";
import FormUser, { accessLevels, institutionList } from "@/source/components/FormUser";
import ServerTable from "@/source/components/ServerTable";
import UserRepository, { IUser } from "@/source/repository/UserRepository";
import { _errors } from "@/source/utils/errorsValidate";
import { WrapperForm } from "@/styles/globalStyles";
import { Drawer, Modal, Tag } from "antd";
import Card from "antd/es/card/Card"
import { useState } from "react";
import { WrapperUser } from "./styles"

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Primeiro Acesso',
    dataIndex: 'firstAccess',
    key: 'firstAccess',
    render: (value: number) => {
      const booleanValue = Boolean(value)
      if (booleanValue) return <Tag color='red'>Sim</Tag>
      return <Tag color='blue'>Não</Tag>
    }
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Sobrenome',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (value: string)  => value === 'undefined' ? '' : value ?? ''
  },
  {
    title: 'Empresa',
    dataIndex: 'corp',
    key: 'corp'
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Perfil',
    dataIndex: 'accessLevel',
    key: 'accessLevel'
  },
  {
    title: 'Instituição',
    dataIndex: 'institution',
    key: 'institution',
    render: (value: string) => value ?? ''
  },
  {
    title: 'Faz parte do agro?',
    dataIndex: 'partOf',
    key: 'partOf',
    render: (value: number) => {
      const booleanValue = Boolean(value)
      if (booleanValue) return <Tag color='red'>Sim</Tag>
      return <Tag color='blue'>Não</Tag>
    }
  },
  {
    title: 'Area de atuação',
    dataIndex: 'ocupation',
    key: 'ocupation'
  },
  {
    title: 'Cadeia produtiva',
    dataIndex: 'chain',
    key: 'chain'
  }
]

const filtersDefault: { firstAccess: string, accessLevel: string, institution: string, role: string, partOf: '' } = {
  firstAccess: '',
  accessLevel: '',
  institution: '',
  role: '',
  partOf: ''
}

const occupationList = [
  {value: 'equipamentos', label: 'Equipamentos'},
  {value: 'insumos', label: 'Insumos'},
  {value: 'producaoRural', label: 'Produção Rural'},
  {value: 'industria', label: 'Industria'},
  {value: 'distribuicao', label: 'Distribuição'},
  {value: 'servicos', label: 'Servicos'},
  {value: 'outra', label: 'Outra'},
]

const chainList = [
  {value: 'bovina', label: 'Bovina'  },
  {value: 'suina', label: 'Suina'  },
  {value: 'aves', label: 'Aves'  },
  {value: 'pescado', label: 'Pescado'  },
  {value: 'leiteDerivados', label: 'Leite e Derivados'  },
  {value: 'soja', label: 'Soja'  },
  {value: 'algodao', label: 'Algodao'  },
  {value: 'cafe', label: 'Cafe'  },
  {value: 'cacau', label: 'Cacau'  },
  {value: 'canaAcucar', label: 'Cana de Açúcar'  },
  {value: 'outro', label: 'Outro'} 
]

const rolesList = [
  { value: 'presidente', label: 'Presidente' },
  { value: 'vicePresidente', label: 'Vice Presidente' },
  { value: 'diretor', label: 'Diretor' },
  { value: 'superIntende', label: 'Superintende' },
  { value: 'gerente', label: 'Gerente' },
  { value: 'supervisor', label: 'Supervisor' },
  { value: 'analista', label: 'Analista' },
  { value: 'trainee', label: 'Trainee' },
  { value: 'estagiario', label: 'Estagiario' },
  { value: 'outros', label: 'Outros' },
  { value: '', label: 'Todos' }
]

const User = () => {
  const [refresh, setRefresh] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const [values, setValues] = useState<IUser>({} as any)
  const [filters, setFilters] = useState<any>(filtersDefault)
  const [errors, setErrors] = useState<_errors>([])

  const handleChangeValues = (changeValues: any) => setValues({ ...values, ...changeValues })

  const handleShowDrawer = () => setShowDrawer(!showDrawer)

  const handleFilters = (value: any) => setFilters({ ...filters, ...value })

  const onSubmit = async () => {
    setErrors([])
    setLoading(true)
    try {
      const response: any = await UserRepository.create(values)

      const error = response?.response?.data?.error

      if (error) {
        setLoading(false)
        setErrors(error)
        return
      }

      setRefresh(refresh + 1)
      Modal.success({
        content: response?.message,
        style: { 
          borderRadius: '0px'
        }
      })
      setValues({} as any)
    } catch (err: any) {
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <>
      <Drawer
        open={showDrawer}
        onClose={handleShowDrawer}
        footer={
          <Footer
            loading={loading}
            onCancel={handleShowDrawer}
            onConfirmText='Adicionar pré cadastro'
            onSubmit={onSubmit}
          />
        }
      >
        <FormUser
          onChange={handleChangeValues}
          values={values}
          errors={errors}
        />
      </Drawer>

      <WrapperUser>
        <Card>
          <ServerTable
            columns={columns}
            path={'/user'}
            refresh={refresh}
            placeholderSearch={'Buscar por nome ou e-mail'}
            scrollX={400}
            actions={<Button onClick={handleShowDrawer}>Adicionar pré cadastro</Button>}
          >
            <WrapperForm>
              <label>Primeiro acesso: </label>
              <DropDown
                name="firstAccess"
                onChange={handleFilters}
                options={[ {label: 'Sim', value: 'true'}, { label: 'Não', value: 'false' }, { label: 'Todos', value: '' } ]}
                value={filters.firstAccess}
              />
            </WrapperForm>

            <WrapperForm>
              <label>Cargo:</label>
              <DropDown name="role" value={filters?.role ?? ''} onChange={handleFilters} options={rolesList} />
            </WrapperForm>

            <WrapperForm>
              <label>Perfil:</label>
              <DropDown name="accessLevel" value={filters?.accessLevel ?? ''} onChange={handleFilters} options={[...accessLevels, { value: '', label: 'Todos' }]} />
            </WrapperForm>

            { (filters?.accessLevel === 'adminInstitucional') &&
              <WrapperForm>
                <label>Instituição:</label>
                <DropDown name="institution" value={filters?.institution} onChange={handleFilters} options={institutionList} />
              </WrapperForm>
            }

            <WrapperForm>
              <label>Faz parte do agro: </label>
              <DropDown
                name="partOf"
                onChange={handleFilters}
                options={[ {label: 'Sim', value: 'true'}, { label: 'Não', value: 'false' }, { label: 'Todos', value: '' } ]}
                value={filters.partOf}
              />
            </WrapperForm>

            <WrapperForm>
              <label>Area de atuação: </label>
              <DropDown
                name="ocupation"
                onChange={handleFilters}
                options={occupationList}
                value={filters.ocupation}
              />
            </WrapperForm>

            <WrapperForm>
              <label>Cadeia produtiva: </label>
              <DropDown
                name="chain"
                onChange={handleFilters}
                options={chainList}
                value={filters.chain}
              />
            </WrapperForm>
          </ServerTable>
        </Card>
      </WrapperUser>
    </>
  )
}

export default User