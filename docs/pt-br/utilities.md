# Utilitários

Aqui você encontrará todos os utilitários disponíveis para uso.

## isValidCpf

Valida se o CPF é válido.

```javascript
import { isValidCpf } from '@brazilian-utils/brazilian-utils';

isValidCpf('155151475'); // false
```

## formatCpf

Formata o CPF.

```javascript
import { formatCpf } from '@brazilian-utils/brazilian-utils';

formatCpf('74650688000'); // 746.506.880-00
formatCpf('746506880', { pad: true }); // 007.465.068-80
```

## parseCpf

Remove a formatação do CPF, mantém apenas os dígitos e limita o resultado a 11 dígitos.

```javascript
import { parseCpf } from '@brazilian-utils/brazilian-utils';

parseCpf('746.506.880-00'); // 74650688000
```

## generateCpf

Gera um CPF válido aleatório.

```javascript
import { generateCpf } from '@brazilian-utils/brazilian-utils'

generateCpf();
```

## isValidCnpj

Valida se o CNPJ é válido.

```javascript
import { isValidCnpj } from '@brazilian-utils/brazilian-utils';

isValidCnpj('15515147234255'); // false
```

## formatCnpj

Formata o CNPJ.

```javascript
import { formatCnpj } from '@brazilian-utils/brazilian-utils';

formatCnpj('24522200000174'); // 24.522.200/0001-74
formatCnpj('245222000174', { pad: true }); // 00.245.222/0001-74
formatCnpj('12OUT345000199', { version: 2 }); // 12.OUT.345/0001-99
```

## parseCnpj

Remove a formatação do CNPJ, retorna um valor normalizado e limita o resultado a 14 caracteres.

```javascript
import { parseCnpj } from '@brazilian-utils/brazilian-utils';

parseCnpj('24.522.200/0001-74'); // 24522200000174
parseCnpj('12.OUT.345/0001-99', { version: 2 }); // 12OUT345000199
```

## generateCnpj

Gera um CNPJ válido aleatório.

```javascript
import { generateCnpj } from '@brazilian-utils/brazilian-utils'

generateCnpj();
```

## isValidCep

Valida se o CEP é válido.

```javascript
import { isValidCep } from '@brazilian-utils/brazilian-utils';

isValidCep('92500000'); // true
```

## isValidBoleto

Valida se o boleto é válido.

```javascript
import { isValidBoleto } from '@brazilian-utils/brazilian-utils';

isValidBoleto('00190000090114971860168524522114675860000102656'); // true
```

## formatBoleto

Formata um número de boleto.

```javascript
import { formatBoleto } from '@brazilian-utils/brazilian-utils';

formatBoleto('00190000090114971860168524522114675860000102656'); // 00190.00009 01149.718601 68524.522114 6 75860000102656
formatBoleto('1900000901149', { pad: true }); // 00000.00000 00000.000019 00000.901149 0 00000000000000
```

## parseBoleto

Remove a formatação do boleto, mantém apenas os dígitos e limita o resultado a 47 dígitos.

```javascript
import { parseBoleto } from '@brazilian-utils/brazilian-utils';

parseBoleto('00190.00009 01149.718601 68524.522114 6 75860000102656'); // 00190000090114971860168524522114675860000102656
```

## generateBoleto

Gera um boleto válido aleatório.

```javascript
import { generateBoleto } from '@brazilian-utils/brazilian-utils';

generateBoleto(); // "00190000090114971860168524522114675860000102656"
```

## getBoletoInfo

Extrai informações de um boleto (valor, data de vencimento, código do banco).

```javascript
import { getBoletoInfo } from '@brazilian-utils/brazilian-utils';

getBoletoInfo('00190000090114971860168524522114675860000102656');
// { amount: 102656, expirationDate: Date, bankCode: '001' }
```

## isValidEmail

Valida se email é válido.

```javascript
import { isValidEmail } from '@brazilian-utils/brazilian-utils';

isValidEmail('john.doe@hotmail.com'); // true
```

## isValidPhone

Valida se o número de telefone (celular ou residencial) é válido.

```javascript
import { isValidPhone } from '@brazilian-utils/brazilian-utils';

isValidPhone('11900000000'); // true
```

## formatPhone

Formata número de telefone de acordo com padrões brasileiros.

```javascript
import { formatPhone } from '@brazilian-utils/brazilian-utils';

formatPhone('11900000000'); // 90000-0000
formatPhone('11900000000', { mask: 'nanp' }); // (11) 90000-0000
formatPhone('11900000000', { mask: 'auto' }); // Detecta automaticamente a máscara baseado no comprimento
```

## parsePhone

Remove a formatação do telefone, mantém apenas os dígitos e limita o resultado a 11 dígitos.

```javascript
import { parsePhone } from '@brazilian-utils/brazilian-utils';

parsePhone('(11) 90000-0000'); // 11900000000
parsePhone('+55 (11) 90000-0000'); // 55119000000
```

## isValidMobilePhone

Valida se o número de telefone celular é válido.

```javascript
import { isValidMobilePhone } from '@brazilian-utils/brazilian-utils';

isValidMobilePhone('11900000000'); // true
```

## isValidLandlinePhone

Valida se o número de telefone residencial é válido.

```javascript
import { isValidLandlinePhone } from '@brazilian-utils/brazilian-utils';

isValidLandlinePhone('1130000000'); // true
```

## isValidLicensePlate

Valida se a placa de carro ou moto é válida. Suporta o formato antigo brasileiro (ABC-1234) e os formatos Mercosul para carros (ABC1D23) e motos (ABC12D3).

```javascript
import { isValidLicensePlate } from '@brazilian-utils/brazilian-utils';

isValidLicensePlate('ABC1234'); // true (formato brasileiro)
isValidLicensePlate('ABC-1234'); // true (formato brasileiro com hífen)
isValidLicensePlate('ABC1D23'); // true (formato Mercosul de carro)
isValidLicensePlate('ABC12D3'); // true (formato Mercosul de moto)
```

## isValidRenavam

Valida se o RENAVAM (Registro Nacional de Veículos Automotores) é válido. Suporta tanto o formato antigo (9 dígitos) quanto o novo formato (11 dígitos).

```javascript
import { isValidRenavam } from '@brazilian-utils/brazilian-utils';

isValidRenavam('639884962'); // true (9 dígitos, formato antigo)
isValidRenavam('00639884962'); // true (11 dígitos, formato novo)
isValidRenavam('12345678901'); // false (checksum inválido)
```

## isValidPis

Valida se o PIS é válido.

```javascript
import { isValidPis } from '@brazilian-utils/brazilian-utils';

isValidPis('12056412547'); // false
```

## formatPis

Formata número de PIS.

```javascript
import { formatPis } from '@brazilian-utils/brazilian-utils';

formatPis('12345678901'); // 123.45678.90-1
formatPis('123456789', { pad: true }); // 001.23456.78-9
```

## parsePis

Remove a formatação do PIS, mantém apenas os dígitos e limita o resultado a 11 dígitos.

```javascript
import { parsePis } from '@brazilian-utils/brazilian-utils';

parsePis('123.45678.90-1'); // 12345678901
```

## formatCep

Formata o CEP.

```javascript
import { formatCep } from '@brazilian-utils/brazilian-utils';

formatCep('92500000'); // 92500-000
```

## parseCep

Remove a formatação do CEP, mantém apenas os dígitos e limita o resultado a 8 dígitos.

```javascript
import { parseCep } from '@brazilian-utils/brazilian-utils';

parseCep('92500-000'); // 92500000
```

## getAddressInfoByCep

Busca informações de endereço para um CEP usando múltiplos provedores.

```javascript
import { getAddressInfoByCep } from '@brazilian-utils/brazilian-utils';

// Usando todos os provedores (padrão)
const address = await getAddressInfoByCep('01310100');
// { cep: '01310100', state: 'SP', city: 'São Paulo', neighborhood: 'Bela Vista', street: 'Avenida Paulista' }

// Usando provedores específicos
const address = await getAddressInfoByCep('01310-100', {
  providers: ['viacep', 'brasilapi']
});

// Usando número como entrada (será preenchido automaticamente com zeros à esquerda)
const address = await getAddressInfoByCep(1310100);
```

## isValidProcessoJuridico

Valida o número do processo jurídico de acordo com definição do [CNJ](https://www.conjur.com.br/dl/resolucao-65-cnj.pdf).

```javascript
import { isValidProcessoJuridico } from '@brazilian-utils/brazilian-utils';

isValidProcessoJuridico('00020802520125150049'); // true
```

## formatProcessoJuridico

Formata um número no formato definido pelo [CNJ](https://www.conjur.com.br/dl/resolucao-65-cnj.pdf).

```javascript
import { formatProcessoJuridico } from '@brazilian-utils/brazilian-utils';

formatProcessoJuridico('00020802520125150049'); // 0002080-25.2012.515.0049
```

## parseProcessoJuridico

Remove a formatação do processo jurídico, mantém apenas os dígitos e limita o resultado a 20 dígitos.

```javascript
import { parseProcessoJuridico } from '@brazilian-utils/brazilian-utils';

parseProcessoJuridico('0002080-25.2012.515.0049'); // 00020802520125150049
```

## isValidIe

Valida se a inscrição estadual de um estado é válida.

```javascript
import { isValidIe } from '@brazilian-utils/brazilian-utils';

isValidIe('AC', '0187634580933'); // false
```

## isValidBankAccount

Valida se uma conta bancária brasileira é válida. Suporta algoritmos de validação específicos para os principais bancos (Banco do Brasil, Itaú, Bradesco, Santander, Caixa Econômica Federal) e validação genérica mod10/mod11 para outros bancos.

```javascript
import { isValidBankAccount } from '@brazilian-utils/brazilian-utils';

isValidBankAccount({
  bankCode: '001',
  agency: '1234',
  account: '12345678',
  digit: '5'
}); // true (se conta válida do Banco do Brasil)

isValidBankAccount({
  bankCode: '341',
  agency: '1234',
  account: '12345',
  digit: '6'
}); // true (se conta válida do Itaú)
```

## capitalize

Transforma primeira letra de cada palavra em maiúscula ignorando preposições.

```javascript
import { capitalize } from '@brazilian-utils/brazilian-utils';

capitalize('josé e maria'); // José e Maria
capitalize('josé Ama MARIA', { lowerCaseWords: ['ama'] }); // José ama Maria
capitalize('doc inválido', { upperCaseWords: ['DOC'] }); // DOC Inválido
```

## formatCurrency

Formata um número inteiro ou float para uma string no padrão BRL

```javascript
import { formatCurrency } from '@brazilian-utils/brazilian-utils';

formatCurrency(10); // 10,00
formatCurrency(10756.11); // 10.756,11
formatCurrency(10756.123, { precision: 3 }); // 10.756,123
```

## parseCurrency

Transforma uma string para o formato de inteiro ou float

```javascript
import { parseCurrency } from '@brazilian-utils/brazilian-utils';

parseCurrency('10.756,11'); // 10756.11
parseCurrency('R$ 10.59'); // 10.59
```

## getStates

Retorna todos os estados brasileiros.

```javascript
import { getStates } from '@brazilian-utils/brazilian-utils';

getStates();
// [
//   { code: 'AC', name: 'Acre' },
//   { code: 'AL', name: 'Alagoas' },
//   { code: 'AP', name: 'Amapá' },
//   { code: 'AM', name: 'Amazonas' },
//   { code: 'BA', name: 'Bahia' },
//   { code: 'CE', name: 'Ceará' },
//   { code: 'DF', name: 'Distrito Federal' },
//   { code: 'ES', name: 'Espírito Santo' },
//   { code: 'GO', name: 'Goiás' },
//   { code: 'MA', name: 'Maranhão' },
//   { code: 'MT', name: 'Mato Grosso' },
//   { code: 'MS', name: 'Mato Grosso do Sul' },
//   { code: 'MG', name: 'Minas Gerais' },
//   { code: 'PA', name: 'Pará' },
//   { code: 'PB', name: 'Paraíba' },
//   { code: 'PR', name: 'Paraná' },
//   { code: 'PE', name: 'Pernambuco' },
//   { code: 'PI', name: 'Piauí' },
//   { code: 'RJ', name: 'Rio de Janeiro' },
//   { code: 'RN', name: 'Rio Grande do Norte' },
//   { code: 'RS', name: 'Rio Grande do Sul' },
//   { code: 'RO', name: 'Rondônia' },
//   { code: 'RR', name: 'Roraima' },
//   { code: 'SC', name: 'Santa Catarina' },
//   { code: 'SP', name: 'São Paulo' },
//   { code: 'SE', name: 'Sergipe' },
//   { code: 'TO', name: 'Tocantins' },
// ]
```

## getCities

Retorna as cidades brasileiras. Retorna todas as cidades se nenhum estado for fornecido, ou cidades de um estado específico.

```javascript
import { getCities } from '@brazilian-utils/brazilian-utils';

// Retorna todas as cidades brasileiras (ordenadas alfabeticamente).
getCities();
// [
//   'Abadia de Goiás',
//   'Abadia dos Dourados',
//   'Abadiânia',
//   'Abaeté',
//   'Abaetetuba',
//   'Abaiara',
//   'Abaíra',
//   'Abaré',
//   'Abatiá',
//   'Abdon Batista',
//   ... 5460 more items
// ]

// Retorna todas as cidades brasileiras do estado de São Paulo (ordenadas alfabeticamente).
getCities('SP');
// [
//   "Adamantina",
//   "Adolfo",
//   "Aguaí",
//   "Águas da Prata",
//   "Águas de Lindóia",
//   "Águas de Santa Bárbara",
//   "Águas de São Pedro",
//   "Agudos",
//   "Alambari",
//   "Alfredo Marcondes",
//   ... 635 more items
// ]
```

## getHolidays

Retorna feriados brasileiros para um determinado ano. Retorna feriados nacionais e opcionalmente feriados estaduais.

```javascript
import { getHolidays } from '@brazilian-utils/brazilian-utils';

// Obtém todos os feriados nacionais de 2024
getHolidays(2024);
// [
//   { name: 'Ano novo', date: Date('2024-01-01') },
//   { name: 'Carnaval (terça-feira)', date: Date('2024-02-13') },
//   { name: 'Sexta-feira Santa', date: Date('2024-03-29') },
//   { name: 'Páscoa', date: Date('2024-03-31') },
//   // ... mais feriados
// ]

// Obtém feriados para um estado específico
getHolidays({ year: 2024, stateCode: 'SP' });
// Inclui feriados nacionais mais feriados estaduais (ex: "Revolução Constitucionalista")
```

## isValidPassport

Verifica se um número de passaporte brasileiro é válido (2 letras maiúsculas seguidas de 6 dígitos).

```javascript
import { isValidPassport } from '@brazilian-utils/brazilian-utils';

isValidPassport('AB123456'); // true
isValidPassport('Ab123456'); // false
isValidPassport('12345678'); // false
```

## formatPassport

Formata um número de passaporte brasileiro (maiúsculas, sem símbolos, limitado a 8 caracteres).

```javascript
import { formatPassport } from '@brazilian-utils/brazilian-utils';

formatPassport('ab123456'); // 'AB123456'
formatPassport('AB-123.456'); // 'AB123456'
```

## generatePassport

Gera um número de passaporte brasileiro válido aleatoriamente.

```javascript
import { generatePassport } from '@brazilian-utils/brazilian-utils';

generatePassport(); // 'RY393097'
```

## parsePassport

Remove todos os caracteres não alfanuméricos de um número de passaporte, converte para maiúsculas e limita o resultado a 8 caracteres.

```javascript
import { parsePassport } from '@brazilian-utils/brazilian-utils';

parsePassport('AB-123.456'); // 'AB123456'
parsePassport(' AB 123 456 '); // 'AB123456'
```

## generateCep

Gera um CEP aleatório.

```javascript
import { generateCep } from '@brazilian-utils/brazilian-utils';

generateCep(); // '92500000'
```

## formatCnh

Formata a CNH.

```javascript
import { formatCnh } from '@brazilian-utils/brazilian-utils';

formatCnh('02650306461'); // 026503064-61
formatCnh('2650306461', { pad: true }); // 026503064-61
```

## isValidCnh

Valida se a CNH é válida.

```javascript
import { isValidCnh } from '@brazilian-utils/brazilian-utils';

isValidCnh('00000000119'); // true
```

## generateCnh

Gera uma CNH válida aleatória.

```javascript
import { generateCnh } from '@brazilian-utils/brazilian-utils';

generateCnh(); // '02650306461'
```

## parseCnh

Remove a formatação da CNH, mantém apenas os dígitos e limita o resultado a 11 dígitos.

```javascript
import { parseCnh } from '@brazilian-utils/brazilian-utils';

parseCnh('026503064-61'); // '02650306461'
```

## getCepInfoByAddress

Busca CEPs a partir de um endereço usando a ViaCEP.

```javascript
import { getCepInfoByAddress } from '@brazilian-utils/brazilian-utils';

const ceps = await getCepInfoByAddress({
  federalUnit: 'SP',
  city: 'Sao Paulo',
  street: 'Avenida Paulista'
});

// [
//   {
//     cep: '01310100',
//     logradouro: 'Avenida Paulista',
//     complemento: 'lado par',
//     bairro: 'Bela Vista',
//     localidade: 'São Paulo',
//     uf: 'SP'
//   }
// ]
```

## generateProcessoJuridico

Gera um número de processo jurídico válido de acordo com a definição do [CNJ](https://www.conjur.com.br/dl/resolucao-65-cnj.pdf).

```javascript
import { generateProcessoJuridico } from '@brazilian-utils/brazilian-utils';

generateProcessoJuridico(); // '00020802520125150049'
generateProcessoJuridico({ year: 2026, court: 5 }); // string | null
```

## formatLegalNature

Formata um código de natureza jurídica.

```javascript
import { formatLegalNature } from '@brazilian-utils/brazilian-utils';

formatLegalNature('2062'); // 206-2
```

## isValidLegalNature

Valida se um código de natureza jurídica existe na lista oficial.

```javascript
import { isValidLegalNature } from '@brazilian-utils/brazilian-utils';

isValidLegalNature('2062'); // true
isValidLegalNature('9999'); // false
```

## generateLegalNature

Gera um código de natureza jurídica válido aleatório.

```javascript
import { generateLegalNature } from '@brazilian-utils/brazilian-utils';

generateLegalNature(); // '2062'
```

## parseLegalNature

Remove a formatação da natureza jurídica, mantém apenas os dígitos e limita o resultado a 4 dígitos.

```javascript
import { parseLegalNature } from '@brazilian-utils/brazilian-utils';

parseLegalNature('206-2'); // '2062'
```

## getLegalNatures

Retorna o mapa de naturezas jurídicas indexado pelo código.

```javascript
import { getLegalNatures } from '@brazilian-utils/brazilian-utils';

const legalNatures = getLegalNatures();

legalNatures['2062']; // 'Sociedade Empresária Limitada'
```

## generatePhone

Gera um telefone brasileiro aleatório.

```javascript
import { generatePhone } from '@brazilian-utils/brazilian-utils';

generatePhone(); // '11912345678' ou '1131234567'
generatePhone('mobile'); // '11912345678'
generatePhone('landline'); // '1131234567'
```

## formatLicensePlate

Formata uma placa. Placas antigas brasileiras são retornadas com hífen e placas Mercosul permanecem normalizadas.

```javascript
import { formatLicensePlate } from '@brazilian-utils/brazilian-utils';

formatLicensePlate('abc1234'); // 'ABC-1234'
formatLicensePlate('abc1d23'); // 'ABC1D23'
```

## generateLicensePlate

Gera uma placa aleatória no formato escolhido.

```javascript
import { generateLicensePlate } from '@brazilian-utils/brazilian-utils';

generateLicensePlate(); // 'ABC1D23'
generateLicensePlate('LLLNNNN'); // 'ABC1234'
generateLicensePlate('LLLNNLN'); // 'ABC12D3'
```

## getFormatLicensePlate

Detecta o formato normalizado de uma placa.

```javascript
import { getFormatLicensePlate } from '@brazilian-utils/brazilian-utils';

getFormatLicensePlate('ABC-1234'); // 'LLLNNNN'
getFormatLicensePlate('ABC1D23'); // 'LLLNLNN'
getFormatLicensePlate('ABC12D3'); // 'LLLNNLN'
getFormatLicensePlate('INVALID'); // null
```

## parseLicensePlate

Remove separadores de uma placa, normaliza para letras maiúsculas e limita o resultado a 7 caracteres.

```javascript
import { parseLicensePlate } from '@brazilian-utils/brazilian-utils';

parseLicensePlate('abc-1234'); // 'ABC1234'
```

## generatePis

Gera um PIS válido aleatório.

```javascript
import { generatePis } from '@brazilian-utils/brazilian-utils';

generatePis(); // '12345678901'
```

## getMunicipality

Busca informações de município por código IBGE, ou obtém o código IBGE a partir do nome do município e UF.

```javascript
import { getMunicipality } from '@brazilian-utils/brazilian-utils';

await getMunicipality({ code: '3550308' });
// ['São Paulo', 'SP']

await getMunicipality({ municipalityName: 'São Paulo', uf: 'SP' });
// '3550308'
```

## isHoliday

Verifica se uma data específica é feriado brasileiro.

```javascript
import { isHoliday } from '@brazilian-utils/brazilian-utils';

isHoliday({ targetDate: new Date('2024-01-01') }); // true
isHoliday({ targetDate: new Date('2024-07-09'), stateCode: 'SP' }); // true
```

## formatVoterId

Formata um título de eleitor.

```javascript
import { formatVoterId } from '@brazilian-utils/brazilian-utils';

formatVoterId('123456780175'); // '1234 5678 01 75'
```

## isValidVoterId

Valida se um título de eleitor é válido.

```javascript
import { generateVoterId, isValidVoterId } from '@brazilian-utils/brazilian-utils';

const voterId = generateVoterId('SP');

isValidVoterId(voterId); // true
```

## generateVoterId

Gera um título de eleitor válido aleatório. Você pode opcionalmente informar a UF.

```javascript
import { generateVoterId } from '@brazilian-utils/brazilian-utils';

generateVoterId(); // título de eleitor aleatório válido
generateVoterId('SP'); // título de eleitor aleatório válido de São Paulo
```

## parseVoterId

Remove a formatação do título de eleitor, mantém apenas os dígitos e limita o resultado a 12 dígitos.

```javascript
import { parseVoterId } from '@brazilian-utils/brazilian-utils';

parseVoterId('1234 5678 01 75'); // '123456780175'
```
