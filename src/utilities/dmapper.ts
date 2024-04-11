// Define a generic Mapper interface
interface Mapper<Entity, Dto> {
    map(entity: Entity): Dto;
    mapArray(entities: Entity[]): Dto[];
  }
  
  // Define a configuration interface for mapping rules
  interface MappingConfig<Entity, Dto> {
    mapToDto(entity: Entity): Dto;
  }
  
  // Create a generic Mapper class implementing the Mapper interface
  export class DMapper<Entity, Dto> implements Mapper<Entity, Dto> {
    private config: MappingConfig<Entity, Dto>;
  
    constructor(config: MappingConfig<Entity, Dto>) {
      this.config = config;
    }
  
    map(entity: Entity): Dto {
      return this.config.mapToDto(entity);
    }
  
    mapArray(entities: Entity[]): Dto[] {
      return entities.map(entity => this.config.mapToDto(entity));
    }
  }
  
//   // Usage example for Account mapping
//   class AccountMapperConfig implements MappingConfig<Account, AccountResponseDto> {
//     mapToDto(entity: Account): AccountResponseDto {
//       const { id, name, email, created, updated } = entity;
//       return {
//         id,
//         name,
//         email,
//         created,
//         updated,
//         isVerified: entity.isVerified(), // Assuming isVerified is a method on Account
//         isActivated: entity.isActivated(), // Assuming isActivated is a method on Account
//       };
//     }
//   }
  
//   // Create an instance of GenericMapper for Account mapping
//   const accountMapper = new GenericMapper<Account, AccountResponseDto>(new AccountMapperConfig());
  